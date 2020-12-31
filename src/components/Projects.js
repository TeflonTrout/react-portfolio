import React from 'react'
import movieVotingjpg from '../documents/portfolioScreenshots/MovieVotingAPI.jpg'
import contakterjpg from '../documents/portfolioScreenshots/Contakter.jpg'
import budgetCalcjpg from '../documents/portfolioScreenshots/budgetCalculator.jpg'
import currencyCacljpg from '../documents/portfolioScreenshots/currencyConvertScreenshot.jpg'
import videoGamejpg from '../documents/portfolioScreenshots/videoGameAPI.jpg'

const Projects = () => {
    return (
    <div class="projects-page">
        <h1>My Projects</h1>
        <div className="grid">

            <div className="block">
                <h3>Movie Voting App</h3>
                <div className="block-screencap">
                    <a href="https://movie-voting-react-app.netlify.app/"><img src={movieVotingjpg} alt=""/></a>
                </div>
                <div className="block-software">
                    React / SASS / Go / API
                </div>
                <div className="buttons">
                    <div class="source-code"><a href="https://github.com/TeflonTrout/react-movie-voting-API">&lt;/Code&gt;</a></div>
                    <div class="hosted"><a href="https://movie-voting-react-app.netlify.app/">Hosted</a></div>
                </div>
            </div>
            <div class="block">
                <h3>Contakter App</h3>
                <div class="block-screencap">
                    <a href="https://tender-kare-4cf4da.netlify.app/"><img src={contakterjpg} alt=""/></a>
                </div>
                <div class="block-software">
                    React / SASS 
                </div>
                <div class="buttons">
                        <div class="source-code"><a href="https://github.com/TeflonTrout/react-contakter">&lt;/Code&gt;</a></div>
                        <div class="hosted"><a href="https://tender-kare-4cf4da.netlify.app/">Hosted</a></div>
                </div>
            </div>
            <div class="block" id="reactCurrencyCalculator">
                <h3>Currency Calculator</h3>
                <div class="block-screencap">
                    <a href="https://admiring-bardeen-e4357e.netlify.app/"><img src={currencyCacljpg} alt=""/></a>
                </div>
                <div class="block-software">
                    React / SASS 
                </div>
                    <div class="buttons">
                        <div class="source-code"><a href="https://github.com/TeflonTrout/react-currency-converter">&lt;/Code&gt;</a></div>
                        <div class="hosted"><a href="https://admiring-bardeen-e4357e.netlify.app/">Hosted</a></div>
                    </div>
                </div>
            <div class="block" id="reactBudgetApp">
                <h3>Budgeting App</h3>
                <div class="block-screencap">
                    <a href="https://hardcore-stonebraker-1da660.netlify.app/"><img src={budgetCalcjpg} alt=""/></a> 
                </div>
                <div class="block-software">
                    React / SASS 
                </div>
                <div class="buttons">
                    <div class="source-code"><a href="https://github.com/TeflonTrout/react-budget-calculator">&lt;/Code&gt;</a></div>
                    <div class="hosted"><a href="https://hardcore-stonebraker-1da660.netlify.app/">Hosted</a></div>
                </div>
            </div>
            <div class="block" id="reactVideoGameApp">
                <h3>Video Game Playlist</h3>
                <div class="block-screencap">
                    <a href="https://peaceful-sammet-2173fd.netlify.app/"><img src={videoGamejpg} alt=""/></a>
                </div>
                <div class="block-software">
                    React / CSS / API
                </div>
                <div class="buttons">
                    <div class="source-code"><a href="https://github.com/TeflonTrout/react-video-game-api">&lt;/Code&gt;</a></div>
                    <div class="hosted"><a href="https://peaceful-sammet-2173fd.netlify.app/">Hosted</a></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Projects
