import Container from "@/app/(blog)/_components/container";
import { HeroPost } from "@/app/(blog)/_components/hero-post";
import { Intro } from "@/app/(blog)/_components/intro";
import { MoreStories } from "@/app/(blog)/_components/more-stories";
import BlurFade from "@/app/components/magicui/blur-fade";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <BlurFade>
      <div className="min-h-screen w-full bg-black flex-col bg-grid-white/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-20">
          <Container>
            <Intro />
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </Container>
        </div>
      </div>
    </BlurFade>
  );
}
