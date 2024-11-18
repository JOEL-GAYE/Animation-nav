export default function Posts({ posts}){
    return(
        <article key={post}>
            <h3>{ posts.title}</h3>
        </article>
    )
}