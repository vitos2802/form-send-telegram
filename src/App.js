import style from './App.module.css'
import Container from './components/Container'
import Basic from './components/Basic'

const App = () => {
	return (
		<div className={style.App}>
			<Container>
				<Basic />
			</Container>
		</div>
	)
}

export default App
