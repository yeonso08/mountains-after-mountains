import FooterButton from '@/components/common/button/FooterButton'
import Header from '@/components/layouts/header'

const RegisterSchedule = () => {
    return (
        <div className="flex h-full flex-col">
            <Header title="등산일정 등록" />
            <div className="flex h-full flex-col justify-between p-5">
                <div>
                    <div className="text-b1">어떤산에 가시나요?</div>
                </div>
                <FooterButton>일정 등록하기</FooterButton>
            </div>
        </div>
    )
}

export default RegisterSchedule
