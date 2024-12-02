export default function Doc(props: Lume.Data) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{props.title}</title>
        <link rel='stylesheet' href='/static/styles.css' />
      </head>
      <body>
        {props.children}
      </body>
    </html>
  )
}

