import NavContainer from './NavContainer';
import { FormInstance, PageHeader, Row, Space, Typography, notification, Button } from 'antd';
import React, { useState, useMemo } from 'react';
import { StepWizardChildProps } from 'react-step-wizard';
import styled from 'styled-components';
import {
  NFTAttribute,
  MintDispatch,
  NFTFormValue,
  UploadedFilePin,
  FilePreview,
  STORAGE_UPLOAD_ENDPOINT,
} from '../index';
import { Spinner } from '../../../components/Spinner';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 34px;
  row-gap: 74px;
`;

const Header = styled(PageHeader)`
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 65px;
  text-align: center;
  width: 701px;
  margin-top: 47px;
`;

const { Paragraph, Title } = Typography;

const StyledSummaryItem = styled.div`
  max-width: 245px;

  img {
    object-fit: cover;
    min-height: 245px;
  }
`;

const Attribute = styled(Space)`
  :not(:last-child) {
    margin-bottom: 9px;
  }

  .ant-space-item:first-of-type {
    .ant-typography {
      opacity: 60%;
    }
  }
`;
const SummaryItem = ({
  value,
  filePreview,
  showRoyaltyPercentage,
  showCreatorCount,
}: {
  value: NFTFormValue;
  filePreview: FilePreview;
  showRoyaltyPercentage: boolean;
  showCreatorCount: boolean;
}) => {
  if (!filePreview) {
    throw new Error('filePreview is required');
  }

  return (
    <StyledSummaryItem>
      <img
        width={245}
        height={245}
        src={URL.createObjectURL(filePreview.coverImage as Blob)}
        alt={filePreview.file.name}
        key={filePreview.file.name}
      />
      <Title level={4} style={{ marginBottom: 3 }}>
        {value.name}
      </Title>

      <Paragraph
        ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}
        style={{ opacity: '60%' }}
      >
        {value.description}
      </Paragraph>
      {showRoyaltyPercentage && (
        <Attribute>
          <Paragraph style={{ width: 110 }}>Royalty:</Paragraph>
          <Paragraph>{value.seller_fee_basis_points / 100}%</Paragraph>
        </Attribute>
      )}
      {value.externalUrl && (
        <Attribute>
          <Paragraph style={{ width: 110 }}>External URL:</Paragraph>
          <Paragraph>{value.externalUrl}</Paragraph>
        </Attribute>
      )}
      {value.attributes?.map((attribute: NFTAttribute, index: number) =>
        attribute.trait_type ? (
          <Attribute key={index}>
            <Paragraph style={{ width: 110 }}>{attribute.trait_type}:</Paragraph>
            <Paragraph>{attribute.value}</Paragraph>
          </Attribute>
        ) : null
      )}
      {showCreatorCount && (
        <Attribute>
          <Paragraph style={{ width: 110 }}>Creators:</Paragraph>
          <Paragraph>{value.properties.creators.length}</Paragraph>
        </Attribute>
      )}
    </StyledSummaryItem>
  );
};

interface Props extends Partial<StepWizardChildProps> {
  files: Array<File>;
  filePreviews: Array<FilePreview>;
  dispatch: MintDispatch;
  form: FormInstance;
  formValues: NFTFormValue[] | null;
  setNFTValues: (filePins: UploadedFilePin[]) => void;
  onClose: () => void;
  doEachRoyaltyInd: boolean;
  track: any; // Need to import types for this
}

export default function Summary({
  previousStep,
  goToStep,
  files,
  filePreviews,
  nextStep,
  dispatch,
  formValues,
  onClose,
  setNFTValues,
  doEachRoyaltyInd,
  track,
}: Props) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadFailed, setUploadFailed] = useState(false);

  // if one or more NFTs have a different royalty percentage it makes sense to show it in the summary
  const showRoyaltyPercentage = useMemo(() => {
    return (
      formValues?.some((nft1) =>
        formValues.some((nft2) => nft1.seller_fee_basis_points !== nft2.seller_fee_basis_points)
      ) ?? false
    );
  }, [formValues]);

  // if one or more NFTs have a different number of creators(other than seller and holaplex) it makes sense to show it in the summary.
  const showCreatorCount = useMemo(
    () =>
      formValues?.some((nft1) =>
        formValues.some(
          (nft2) => nft1.properties.creators.length !== nft2.properties.creators.length
        )
      ) ?? false,
    [formValues]
  );

  const upload = async () => {
    const body = new FormData();

    files.forEach((i) => body.append(i.name, i, i.name));

    setIsUploading(true);
    setUploadFailed(false);
    try {
      const items = formValues?.map((nft) => ({
        nrOfCreators: nft.properties.creators.length,
        royaltyPercentage: nft.seller_fee_basis_points,
        hasDescription: !!nft.description,
        hasExternalUrl: !!nft.externalUrl,
      }));
      track('Mint info and royalty Completed', {
        event_category: 'Minter',
        totalItems: items?.length,
        doEachRoyaltyIndividually: doEachRoyaltyInd,
        items,
      });

      const resp = await fetch(STORAGE_UPLOAD_ENDPOINT, {
        method: 'POST',
        body,
      });

      if (!resp.ok) throw new Error('Assets failed to upload');

      const uploadedFilePins = await resp.json();

      dispatch({ type: 'UPLOAD_FILES', payload: uploadedFilePins.files });
      setNFTValues(uploadedFilePins.files);
      nextStep!();
    } catch (e) {
      console.log('summary error is', e);
      notification.error({ message: 'Upload of assets to IPFS failed, please try again' });
      setUploadFailed(true);
      setIsUploading(false);
    }
  };

  if (!formValues) return null;

  return (
    <NavContainer title="Summary" previousStep={previousStep} goToStep={goToStep} onClose={onClose}>
      <Header>Do these look right?</Header>
      <Button
        onClick={upload}
        type="primary"
        style={{ display: 'flex', alignItems: 'center' }}
        disabled={isUploading}
      >
        {uploadFailed ? 'Retry' : 'Looks good'}
        {isUploading && <Spinner style={{ marginLeft: 8, marginTop: 5 }} height={24} width={24} />}
      </Button>

      <Row style={{ marginTop: 78 }}>
        <Grid>
          {formValues.map(
            (fv: NFTFormValue, index: number) =>
              filePreviews[index] && (
                <SummaryItem
                  key={fv.name}
                  value={fv}
                  filePreview={filePreviews[index]}
                  showRoyaltyPercentage={showRoyaltyPercentage}
                  showCreatorCount={showCreatorCount}
                />
              )
          )}
        </Grid>
      </Row>
    </NavContainer>
  );
}
