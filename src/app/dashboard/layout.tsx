import { NavLinks } from "@/app/ui/nav-links";

export default function DashboardLayout({ 
    children
 } : { 
    children: React.ReactNode
 }) {
    return (
        <section>
            <NavLinks />

            <div>Title</div>
            {children}
        </section>
    );
}
