import FooterButton from '@/components/common/button/FooterButton'

const Test = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <div className="text-h1">Head1</div>
      <div className="text-h2">Head2</div>
      <div className="text-h3">Head3</div>
      <div className="text-h4">Head4</div>
      <div className="text-h5">Head5</div>
      <div className="text-b1 text-main">Main Color Body1</div>
      <div className="text-b2 text-gray-400">Gray-400 Color Body2</div>
      <div className="text-b3 text-success">Success Color Body3</div>
      <FooterButton>text</FooterButton>
      <FooterButton variant="bright">text</FooterButton>
      <FooterButton disabled={true}>text</FooterButton>
    </div>
  )
}

export default Test
