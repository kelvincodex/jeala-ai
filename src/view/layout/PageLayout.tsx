import {DefaultLayout} from "@/view/layout/DefaultLayout.tsx";
import {DefaultHeader} from "@/component/header/DefaultHeader.tsx";
import {DefaultFooter} from "@/component/footer/DefaultFooter.tsx";

interface PageLayoutProps {
    children?: React.ReactNode;
}
export const PageLayout = ({children}: PageLayoutProps) => {
    return (
        <DefaultLayout>
            <DefaultHeader  />
            {children}
            <DefaultFooter />
        </DefaultLayout>
    )
}