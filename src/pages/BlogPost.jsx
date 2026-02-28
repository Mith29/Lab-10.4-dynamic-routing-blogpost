import { useParams } from "react-router-dom";
import { posts } from "../lib/posts";

export default function BlogPost() {
	const { slug } = useParams();

	const post = posts.find((p) => p.slug == slug);

	if (!post) {
		return (
			<div>
				<h2>Post Not Found</h2>
				<p>No blog post exists with this slug!</p>
			</div>
		);
	}

	return (
		<div>
			<h2>{post.title}</h2>
			<p>{post.content}</p>
		</div>
	);
}
