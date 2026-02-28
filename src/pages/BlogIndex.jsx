import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

export default function BlogIndex() {
	return (
		<div>
			<h2>Blog Posts</h2>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link to={`/BlogPost/${post.slug}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
