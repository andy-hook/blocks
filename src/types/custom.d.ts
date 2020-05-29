// Typescript, why can't you see my svgs?
declare module "*.svg" {
  const content: string
  export default content
}

// "react-truncate-string" doesn't currently have type declarations
declare module "react-truncate-string" {
  const TruncateString: any
  export default TruncateString
}
