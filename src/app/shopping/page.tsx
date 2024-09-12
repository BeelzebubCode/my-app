import ServerComponent from "../server-component/page";
import ClientComponent from "../client-component/page";

export default function ShoppingPage() {
    return (
        <>
            <div>My Product from Server</div>
            <ServerComponent />

            <div>My Products from Client</div>
            <ClientComponent />
        </>
    );
}