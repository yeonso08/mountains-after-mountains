interface OnboardingContentProps {
  img: string
  text: string
}

const OnboardingContent = ({ img, text }: OnboardingContentProps) => {
  return (
    <div className="h-64 overflow-hidden rounded-2xl">
      <div className="h-4/5 bg-black">
        <img src={img} alt="Onboarding image" className="h-full w-full object-cover" />
      </div>
      <div
        className="flex h-1/5 items-center justify-center bg-white p-4 text-center"
        style={{ whiteSpace: 'pre-line' }}
      >
        {text}
      </div>
    </div>
  )
}

export default OnboardingContent
