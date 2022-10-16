import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Logo from "../assets/images/logo_ copy.svg";
import { FaHandsHelping } from "react-icons/fa";

const Res = () => {
    const { 
        data,
        userInput,
        isInputBlank,
        isNotFound 
     } = useContext(GlobalContext);

    return (
        <div>
            {
                data && (
                <div className="res_container">
                    <div className="res_box mb-4">
                        <div className="image_container">
                            <img src={data[`${userInput}`]?.cover} alt="" />
                        </div>
                        <div>
                            <h2 className="text-bgColor text-2xl mb-2">{data[`${userInput}`]?.name}</h2>
                            <p className="mb-1">{data[`${userInput}`]?.description}</p>
                            <p>Watch the video on {" "}
                                <a className="text-bgColor" 
                                href={data[`${userInput}`]?.youtube} 
                                rel="noreferrer"
                                target="_blank">youtube</a>
                            </p>
                        </div>
                    </div>

                    <div className="mb-3">
                        <h2 className="text-[1.2rem] underline">Ingredients:</h2>
                        {
                            data[`${userInput}`]?.recipe.map(recipe => (
                                <div key={Math.random() * 100} className="flex">
                                    <p className="recipe inline-flex space-x-2 mb-2">{recipe}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div>
                        <h2 className="text-[1.2rem] underline">Preparation:</h2>
                        {
                            data[`${userInput}`]?.instruction.map(instruct => (
                                <div key={Math.random() * 100} className="flex">
                                    <p className="mb-2">{instruct}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                )
            }

            {
                isInputBlank && (
                    <div>
                        <p>Search bar 🔍 is Empty!. Please enter a meal</p>
                    </div>
                )
            }

            {
                isNotFound && (
                    <div>
                        <p>This entry does not exist in our database as of yet :</p>
                        <p className="mb-2 mt-2">
                            1. You can help us add this by creating a{" "}

                            <a
                                href="https://github.com/codeboyfriend/bChef"
                                target="_blank"
                                rel="noreferrer"
                                className="text-bgColor">
                            github issue
                            </a>
                        </p>
                        <p className="mb-2">
                            2. You could fill out this{" "}
                            <a 
                                href="https://forms.gle/HRGFJqLf3GpXHQbP8" 
                                target={"_blank"} 
                                rel="noreferrer"
                                className="text-bgColor">
                            feedback form
                            </a>{" "}
                            and we will address the issue
                        </p>
                        <p className="mb-2">
                            3. Reach us on twitter{" "}
                            <a href="https://twitter.com/codeboyfriend" target={"_blank"}  
                            rel="noreferrer"className="text-bgColor">
                            @bChef
                            </a>
                        </p>
                    </div>
                )
            }

            {
                !data && !isInputBlank && !isNotFound && (
                    <div className="flex flex-col items-center justify-center max-w-[600px] mx-auto  py-6">
                        <img className="mb-3" src={Logo} alt="" />
                        <p className="text-center leading-7">Are you having problem, preparing that meal your heart desires?. Worry no more, <span className="text-bgColor">bChef</span> is here with the full recipe and link to youtube video. Get into the kitchen and prepare something delicious!.</p>
                        <button className="bg-darkBlue px-3 py-1 text-white rounded-lg mt-3 hover:opacity-80"><FaHandsHelping className="inline-flex" /> Sponsor</button>
                    </div>
                )
            }
        </div>
    )
}

export default Res