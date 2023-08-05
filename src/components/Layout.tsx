export const Layout = ({ children }: { children: any }) => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/public/output.css" rel="stylesheet" />
      </head>
      <body>
        <main class="p-6 font-serif">{children}</main>
      </body>
    </html>
  );
};
