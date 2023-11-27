interface Props {
  children: React.ReactNode;
}
function Slide({ children }: Props) {
  return (
    <div className="min-w-full h-fit">
      {children}
    </div>
  )
}

export default Slide