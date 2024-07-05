import withMDXFn from "@next/mdx"

const withMDX = withMDXFn()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  redirects: () => {
    return [
      {
        source: "/redirect/shop",
        destination: "https://www.etsy.com/uk/shop/AugustGlassDesigns#items",
        permanent: false,
      },
      {
        source: "/redirect/reviews",
        destination: "https://www.etsy.com/uk/shop/AugustGlassDesigns#reviews",
        permanent: false,
      },
      {
        source: "/redirect/twitter",
        destination: "https://twitter.com/mostlymayhem",
        permanent: false,
      },
      {
        source: "/redirect/instagram",
        destination: "https://www.instagram.com/augustglassdesigns/",
        permanent: false,
      },
      {
        source: "/redirect/facebook",
        destination: "https://www.facebook.com/AugustGlassDesigns",
        permanent: false,
      },
    ]
  },
  experimental: {
    mdxRs: true,
    turbo: {
      resolveAlias: {
        "next-mdx-import-source-file": [
          "private-next-root-dir/src/mdx-components",
          "private-next-root-dir/mdx-components",
          "@mdx-js/react",
        ],
      },
      rules: {
        test: /\.mdx$/,
        use: [
          {
            loader: import.meta.resolve(
              "./node_modules/@next/mdx/mdx-rs-loader.js",
            ),
            options: {
              providerImportSource: "next-mdx-import-source-file",
            },
          },
        ],
      },
    },
  },
}

export default withMDX(nextConfig)
