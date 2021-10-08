import { GraduationListProvider } from "./GraduationList";
import { WeddingListProvider } from "./WeddingList";
import { CelebrationListProvider } from "./CelebrationList";
import { InfoDetailsProvider } from "./InfoDetails";
import { CervejasProvider } from "./Cervejas";

export default function Providers({ children }) {
  return (
    <GraduationListProvider>
      <WeddingListProvider>
        <CelebrationListProvider>
          <InfoDetailsProvider>
            <CervejasProvider>{children}</CervejasProvider>
          </InfoDetailsProvider>
        </CelebrationListProvider>
      </WeddingListProvider>
    </GraduationListProvider>
  );
}
