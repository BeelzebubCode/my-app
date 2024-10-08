export default async function Page() {
    const data = await fetch("https://api.vercel.app/blog");
    const posts = await data.json();
    // console.log(posts)
    return (
        <ul>
            {posts.map((post: any) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}