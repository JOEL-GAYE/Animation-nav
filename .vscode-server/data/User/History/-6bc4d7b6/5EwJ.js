export default function Posts({ posts}){
    return(
        <article key={post.id}>
            <h3>{ posts.title}</h3>
        </article>
    )
}