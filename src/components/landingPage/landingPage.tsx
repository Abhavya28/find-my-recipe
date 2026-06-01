import TrendingRecipes from "./trendingRecipes"
import Category from "./category"
import Hero from "./hero"

const LandingPage = () => {
  return (
    <div>
        <Hero />
        <Category />
        <TrendingRecipes />
    </div>
  )
}

export default LandingPage