import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
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

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const ogParams = new URLSearchParams();
  ogParams.set("title", post.title);
  ogParams.set("excerpt", post.excerpt);
  ogParams.set("date", post.date);
  ogParams.set("author", post.author.name);

  const title = `${post.title}`;

  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      description: post.excerpt.slice(0, 50),
      type: "article",
      url: `https://theautomationcompany.tech/posts/${params.slug}`,
      images: [
        {
          url: `/api/og?${ogParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`/api/og?${ogParams.toString()}`],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
