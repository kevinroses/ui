/// <reference types="react" />
import { Creator } from '../../index';
interface Props {
    showDonationField: boolean;
    creators: Creator[];
    updateDonationFieldState: (show: boolean) => void;
    updateCreatorState: (value: Creator[]) => void;
    updateShowErrorState: (value: boolean) => void;
}
export declare function ChangeDonationField(props: Props): JSX.Element;
export {};
