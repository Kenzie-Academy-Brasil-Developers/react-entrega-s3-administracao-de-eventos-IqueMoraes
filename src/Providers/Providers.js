import { GraduationListProvider } from "./GraduationList";
import { WeddingListProvider } from "./WeddingList";
import { CelebrationListProvider } from "./CelebrationList";


export default function Providers({children}){

    return(
        <GraduationListProvider>
            <WeddingListProvider>
                <CelebrationListProvider>
                    {children}
                </CelebrationListProvider>
            </WeddingListProvider>
        </GraduationListProvider>
    )
}