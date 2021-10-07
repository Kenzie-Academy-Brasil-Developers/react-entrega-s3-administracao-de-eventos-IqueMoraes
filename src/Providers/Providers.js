import { GraduationListProvider } from "./GraduationList";
import { WeddingListProvider } from "./WeddingList";
import { CelebrationListProvider } from "./CelebrationList";
import { ProductsProvider } from "./ProductsLIst";


export default function Providers({children}){

    return(
        <GraduationListProvider>
            <WeddingListProvider>
                <CelebrationListProvider>
                    <ProductsProvider>

                    {children}
                    </ProductsProvider>
                </CelebrationListProvider>
            </WeddingListProvider>
        </GraduationListProvider>
    )
}