import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/(blog)/_components/alert";
import Container from "@/app/(blog)/_components/container";
import Header from "@/app/(blog)/_components/header";
import { PostBody } from "@/app/(blog)/_components/post-body";
import { PostHeader } from "@/app/(blog)/_components/post-header";
import BlurFade from "@/app/components/magicui/blur-fade";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <main>
      <BlurFade>
        <div className="min-h-screen w-full bg-black flex-col bg-grid-small-white/[0.4] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="relative z-20">
            <Container>
              <Header />
              <article className="mb-32">
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </article>
            </Container>
          </div>
        </div>
      </BlurFade>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
