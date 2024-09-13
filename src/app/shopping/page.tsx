import ServerComponent from "../server-component/page";
import ClientComponent from "../client-component/page";
import Header from "../props/page";
import UserProfile from "../multi-props/page";

export default function ShoppingPage() {
    return (
        <>
            <div>Header and Props</div>
            <Header title="Kob"/>
            <hr />
            
            <div>My Product from Server</div>
            <ServerComponent />

            <div>My Products from Client</div>
            <ClientComponent />

            <hr />
            <div>User Profile</div>
            <UserProfile name="Kob" age={39} email="kob@gmail.com" isAdmin={true}/>
        </>
    );
}