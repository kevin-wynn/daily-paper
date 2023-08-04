export const Layout = ({ children }: { children: any }) => {
  return (
    <html>
      <head>
        <script type="module" src="https://cdn.skypack.dev/twind/shim"></script>
      </head>
      <body>{children}</body>
    </html>
  );
};
