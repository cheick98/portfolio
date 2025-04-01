import { useDispatch, useSelector } from 'react-redux'
// my importations
import { realisations } from '../utils/constants'
import { pagePortfolio } from '../utils/pageNames'
import { ROOT_REDUCER_TYPE } from '../redux/store'
import HautPage from '../components/commons/HautPage'
import { MENU_TYPE } from '../redux/other/other.type'
import { _selectMenu } from '../redux/other/other.action'
import PortfolioInfoCard from '../components/cards/PortfolioInfoCard'
import PortfolioModalCard from '../components/cards/PortfolioModalCard'
import PageContainer from '../components/commons/container/PageContainer'

const Portfolio = () => {

    const { menuSelected, openModal } = useSelector((state: ROOT_REDUCER_TYPE) => state.other)
    const dispatch = useDispatch<any>()

    const handleSelectMenu = (menu: MENU_TYPE) => dispatch(_selectMenu(menu))

    return (
        <PageContainer titlePage={pagePortfolio}>
            <HautPage name='Mes réalisations' />

            <div className='portfolio_container'>
                {/* menu */}
                <div className='portfolio_menu_container'>
                    <ul className='portfolio_menu'>
                        <li className={`portfolio_menu_item ${menuSelected === 'all' ? 'active' : ''} `} onClick={() => handleSelectMenu('all')}>Tout</li>
                        <li className={`portfolio_menu_item ${menuSelected === 'web' ? 'active' : ''} `} onClick={() => handleSelectMenu('web')}>Sites webs</li>
                        <li className={`portfolio_menu_item ${menuSelected === 'mobile' ? 'active' : ''} `} onClick={() => handleSelectMenu('mobile')}>Applications mobiles</li>
                    </ul>
                </div>

                <div className='portfolio_content_container'>
                    {realisations
                        .filter(realisation => menuSelected === 'all' || realisation.type === menuSelected)
                        .map((realisation, i) => <PortfolioInfoCard key={i} index={1} realisation={realisation} />)
                    }
                </div>
            </div>

            {openModal && <PortfolioModalCard />}
        </PageContainer >
    )
}

export default Portfolio