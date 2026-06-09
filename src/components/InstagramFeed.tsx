import Image from "next/image";
import Link from "next/link";
import { getInstagramPosts } from "@/lib/instagram";
import { site } from "@/data/site";

export default async function InstagramFeed() {
  const posts = await getInstagramPosts();

  return (
    <div>
      {posts.length > 0 ? (
        <div className="mx-auto mb-10 grid max-w-4xl grid-cols-3 gap-2 sm:gap-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-cream"
            >

          <Image
            src={post.imageUrl}
            alt="Instagram post from Joy's Nail & Spa"
            width={300}
            height={300}
          />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors group-hover:bg-charcoal/20" />
            </Link>
          ))}
        </div>
      ) : (
        <p className="mb-10 text-sm text-muted">
          Follow us on Instagram to see our latest work.
        </p>
      )}

    </div>
  );
}
