import React from 'react';
import { Link } from '@version/react-router-v3'

export default class Home extends React.Component {
    render() {
        return (
            <div className='app'>
                <h2>당신에게 어울리는 칵테일을 알아보세요</h2>
                <p>술과 술자리에 관한 몇 개의 질문에 대답해주세요. 답변을 토대로 당신의 성향(지향하는 관계, 인식, 판단, 생활방식 등)을 진단하고, 어울리는 칵테일을 알려 드립니다.</p>
                <p>※ 과학적으로 검증되지 않은 테스트입니다. 어디까지나 재미로 즐겨주세요!</p>
                <Link to="/test" className='link'>
                    <button>테스트하기</button>
                </Link>
            </div>
        );
    }
}