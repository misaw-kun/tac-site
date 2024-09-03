import { format, parseISO } from "date-fns";
import { ImageResponse } from "next/og";

export const runtime = "edge";

const og_template_url =
  "https://res.cloudinary.com/dx6mylv5z/image/upload/v1725292913/og-template_kqv5ti.png";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const hasExcerpt = searchParams.has("excerpt");
    const hasAuthor = searchParams.has("author");
    const hasDate = searchParams.has("date");

    const title = hasTitle
      ? searchParams.get("title")?.split(":")[0]
      : "Test title";
    const excerpt = hasExcerpt
      ? searchParams.get("excerpt")?.slice(0, 100)
      : "Test excerpt";
    const author = hasAuthor ? searchParams.get("author") : "Author";
    const date = hasDate ? searchParams.get("date") : "2024-09-01T00:00:00Z";

    const parsedISO = date ? parseISO(date) : "";

    const fontData1 = await fetch(
      new URL("@/app/assets/Satoshi-Medium.woff", import.meta.url)
    ).then((res) => res.arrayBuffer());

    const fontData2 = await fetch(
      new URL("@/app/assets/Satoshi-Variable.woff", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundImage: `url(${og_template_url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            fontWeight: 400,
            fontFamily: "Satoshi",
            color: "white",
            padding: "2.5rem",
          }}
        >
          <h1
            style={{ fontFamily: "Satoshi-bold", lineHeight: "3.5rem" }}
            tw="text-5xl text-neutral-900 w-1/2"
          >
            {title}
          </h1>
          <p tw="text-neutral-800 text-2xl w-1/2">{excerpt} ...</p>
          <caption tw="text-xl text-neutral-700 mt-5">
            by {author} - {format(parsedISO, "LLLL	d, yyyy")}
          </caption>
        </div>
      ),
      {
        fonts: [
          {
            name: "Satoshi",
            data: fontData1,
            style: "normal",
          },
          {
            name: "Satoshi-bold",
            data: fontData2,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
