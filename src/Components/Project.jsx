import React from "react";
import imageone from "../assets/images/1.jpeg";
import imagetwo from "../assets/images/2.png";
import imagethree from "../assets/images/3.jpeg";
import imagefour from "../assets/images/4.png";
import imagefive from "../assets/images/5.jpeg";
import imagesix from "../assets/images/6.jpeg";
import imageseven from "../assets/images/7.jpeg";
import imageeight from "../assets/images/8.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare ,faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const ProjectList = () => {
  return <div>
      <div className="w-11/12 md:w-10/12 mx-auto">

        <div className="md:flex md:justify-between">
          <div className="hidden md:self-center md:block">
            <span className="font-bold text-2xl">Hunted Projects</span>
          </div>
          <div className="flex justify-evenly md:justify-between my-4 md:w-1/2">
            <div className="border w-2/5 mx-2 md:w-1/2 px-1 py-3 rounded-lg">
              <select className="w-full font-semibold">
              <option value="All-Category">All Category</option>
                <option value="Defi">Defi</option>
                <option value="Games">Games</option>
                <option value="Marketplace">Marketplace</option>
                <option value="SocialMedia">Social Media</option>
                <option value="Metaverse">Metaverse</option>
                <option value="NFTs">NFTs</option>
                <option value="DAO">DAO</option>
                <option value="Others">Others</option>
                <option value="Bridges">Bridges</option>
                <option value="Wallets">Wallets</option>
              </select>
              </div>

              <div className="border ml-2 w-2/5 md:w-1/2 py-3 px-1 rounded-lg">
              <select className="w-full font-semibold">
              <option value="All-Category">All Category</option>
                <option value="Defi">Defi</option>
                <option value="Games">Games</option>
                <option value="Marketplace">Marketplace</option>
                <option value="SocialMedia">Social Media</option>
                <option value="Metaverse">Metaverse</option>
                <option value="NFTs">NFTs</option>
                <option value="DAO">DAO</option>
                <option value="Others">Others</option>
                <option value="Bridges">Bridges</option>
                <option value="Wallets">Wallets</option>
              </select>
              </div>
          </div>
        </div>


      </div>
        <div className="w-[85%] md:w-10/12 mx-auto grid gap-5 grid-col-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-3">
          <div className="rounded-2xl border flex flex-col justify-between relative lg:cursor-pointer lg:hover:-translate-y-1 ease-linear duration-150">
              <div className="px-5 py-7">
              <div className="w-[4.5rem] mb-4 border rounded-full"><img className="rounded-full" src={ imageone } alt="project one"/></div>
              <div className="top-5 right-4 absolute border rounded-full px-2 h-8 w-8">
                <FontAwesomeIcon className="text-xs" icon={ faArrowUpRightFromSquare } />
              </div>
              <span className="text-xl font-bold">Wallet01</span>
              <p className="text-md leading-5 text-gray-500 mb-2 mt-1 line-clamp-3">Wallet01 provides a plug n' play architecture to make your app chain agnostic. Wallet01 package lets you interact with wallets of different ecosystems.</p>
              <div className="pt-2"><button className="border border-purple-600 mr-1 bg-purple-200 text-purple-700 font-semibold px-2 text-sm rounded-full">Ethereum</button> <button className="border border-black px-2 text-sm font-semibold rounded-full">Polygon</button></div>
              </div>            
              <div className="bg-gray-50 flex justify-between py-3 px-5 mt-7 rounded-b-2xl">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">
                    <FontAwesomeIcon icon= {faEye} />
                  </div>
                  <div className="ml-1">
                    <span className="text-gray-600 text-sm">35</span>
                  </div>
                </div>

                <div className="flex items-center bg-white lg:hover:border-gray-400 duration-150 border border-gray-200  px-4 py-1 rounded-2xl">
                  <div className="w-4">
                  <FontAwesomeIcon icon= { faHeart } />
                  </div>
                  <div className="ml-2">
                    <span>4</span>
                  </div>
                </div>

              </div>
          </div>

          <div className="rounded-2xl border flex flex-col justify-between relative lg:cursor-pointer lg:hover:-translate-y-1 ease-linear duration-150">
              <div className="px-5 py-7">
              <div className="w-[4.5rem] mb-4 border rounded-full"><img className="rounded-full" src={imagetwo} alt="project two"/></div>
              <div className="top-5 right-4 absolute border rounded-full px-2 h-8 w-8">
                <FontAwesomeIcon className="text-xs" icon={ faArrowUpRightFromSquare } />
              </div>
              <span className="text-xl font-bold">Launchifi</span>
              <p className="text-md leading-5 text-gray-500 mb-2 mt-1-clamp-3">Wallet01 provides a plug n' play. Wallet01 package lets you interact with wallets of different ecosystems.</p>
              <div className="pt-2"><button className="border border-purple-600 mr-1 bg-purple-200 text-purple-700 font-semibold px-2 text-sm rounded-full">Ethereum</button> <button className="border border-black px-2 text-sm font-semibold rounded-full">Polygon</button></div>
              </div>            
              <div className="bg-gray-50 flex justify-between py-3 px-5 mt-7 rounded-b-2xl">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">
                    <FontAwesomeIcon icon= {faEye} />
                  </div>
                  <div className="ml-1">
                    <span className="text-gray-600 text-sm">35</span>
                  </div>
                </div>

                <div className="flex items-center bg-white lg:hover:border-gray-400 duration-150 border border-gray-200 px-4 py-1 rounded-2xl">
                <div className="w-4">
                  <FontAwesomeIcon icon= { faHeart } />
                  </div>
                  <div className="ml-2">
                    <span>4</span>
                  </div>
                </div>

              </div>
          </div>

          <div className="rounded-2xl border flex flex-col justify-between relative lg:cursor-pointer lg:hover:-translate-y-1 ease-linear duration-150">
              <div className="px-5 py-7">
              <div className="w-[4.5rem] mb-4 border rounded-full"><img className="rounded-full" src={imagethree} alt="project three"/></div>
              <div className="top-5 right-4 absolute border rounded-full px-2 h-8 w-8">
                <FontAwesomeIcon className="text-xs" icon={ faArrowUpRightFromSquare } />
              </div>
              <span className="text-xl font-bold">Al Mint</span>
              <p className="text-md leading-5 text-gray-500 mb-2 mt-1 line-clamp-3">Wallet01 provides Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi dignissimos, fugit, similique, consequuntur quis libero distinctio cum iusto fugiat veniam nemo sequi vero et ex totam nulla quibusdam sunt. a plug n' play architecture to make your app chain agnostic. Wallet01 package lets you interact with wallets of different ecosystems.</p>
              <div className="pt-2"><button className="border border-purple-600 mr-1 bg-purple-200 text-purple-700 font-semibold px-2 text-sm rounded-full">Ethereum</button> <button className="border border-black px-2 text-sm font-semibold rounded-full">Polygon</button></div>
              </div>            
              <div className="bg-gray-50 flex justify-between py-3 px-5 mt-7 rounded-b-2xl">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">
                    <FontAwesomeIcon icon= {faEye} />
                  </div>
                  <div className="ml-1">
                    <span className="text-gray-600 text-sm">35</span>
                  </div>
                </div>

                <div className="flex items-center bg-white lg:hover:border-gray-400 duration-150 border border-gray-200 px-4 py-1 rounded-2xl">
                <div className="w-4">
                  <FontAwesomeIcon icon= { faHeart } />
                  </div>
                  <div className="ml-2">
                    <span>4</span>
                  </div>
                </div>

              </div>
          </div>

          <div className="rounded-2xl border flex flex-col justify-between relative lg:cursor-pointer lg:hover:-translate-y-1 ease-linear duration-150">
              <div className="px-5 py-7">
              <div className="w-[4.5rem] mb-4 border rounded-full"><img className="rounded-full" src={imagefour} alt="project four"/></div>
              <div className="top-5 right-4 absolute border rounded-full px-2 h-8 w-8">
                <FontAwesomeIcon className="text-xs" icon={ faArrowUpRightFromSquare } />
              </div>
              <span className="text-xl font-bold">YOOts</span>
              <p className="text-md leading-5 text-gray-500 mb-2 mt-1 line-clamp-3">Wallet01 provides a plug n' play architecture to make your app chain agnostic. Wallet01 package lets you interact with wallets of different ecosystems.</p>
              <div className="pt-2"><button className="border border-purple-600 mr-1 bg-purple-200 text-purple-700 font-semibold px-2 text-sm rounded-full">Ethereum</button> <button className="border border-black px-2 text-sm font-semibold rounded-full">Polygon</button></div>
              </div>            
              <div className="bg-gray-50 flex justify-between py-3 px-5 mt-7 rounded-b-2xl">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">
                    <FontAwesomeIcon icon= {faEye} />
                  </div>
                  <div className="ml-1">
                    <span className="text-gray-600 text-sm">35</span>
                  </div>
                </div>

                <div className="flex items-center bg-white lg:hover:border-gray-400 duration-150 border border-gray-200 px-4 py-1 rounded-2xl">
                  <div className="w-4">
                    <FontAwesomeIcon icon= { faHeart } />
                  </div>
                  <div className="ml-2">
                    <span>4</span>
                  </div>
                </div>

              </div>
          </div>

          <div className="rounded-2xl border flex flex-col justify-between relative lg:cursor-pointer lg:hover:-translate-y-1 ease-linear duration-150">
              <div className="px-5 py-7">
              <div className="w-[4.5rem] mb-4 border rounded-full"><img className="rounded-full" src={ imagefive } alt="project five"/></div>
              <div className="top-5 right-4 absolute border rounded-full px-2 h-8 w-8">
                <FontAwesomeIcon className="text-xs" icon={ faArrowUpRightFromSquare } />
              </div>
              <span className="text-xl font-bold">ThirdWeb</span>
              <p className="text-md leading-5 text-gray-500 mb-2 mt-1 line-clamp-3">Wallet01 provides a plug n' play architecture to make your app chain agnostic. Wallet01 package lets you interact with wallets of different ecosystems.</p>
              <div className="pt-2"><button className="border border-purple-600 mr-1 bg-purple-200 text-purple-700 font-semibold px-2 text-sm rounded-full">Ethereum</button> <button className="border border-black px-2 text-sm font-semibold rounded-full">Polygon</button></div>
              </div>            
              <div className="bg-gray-50 flex justify-between py-3 px-5 mt-7 rounded-b-2xl">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">
                    <FontAwesomeIcon icon= {faEye} />
                  </div>
                  <div className="ml-1">
                    <span className="text-gray-600 text-sm">35</span>
                  </div>
                </div>

                <div className="flex items-center bg-white lg:hover:border-gray-400 duration-150 border border-gray-200 px-4 py-1 rounded-2xl">
                  <div className="w-4">
                    <FontAwesomeIcon icon= { faHeart } />
                  </div>
                  <div className="ml-2">
                    <span>4</span>
                  </div>
                </div>

              </div>
          </div>

          <div className="rounded-2xl border flex flex-col justify-between relative lg:cursor-pointer lg:hover:-translate-y-1 ease-linear duration-150">
              <div className="px-5 py-7">
              <div className="w-[4.5rem] mb-4 border rounded-full"><img className="rounded-full" src={imagesix} alt="project six"/></div>
              <div className="top-5 right-4 absolute border rounded-full px-2 h-8 w-8">
                <FontAwesomeIcon className="text-xs" icon={ faArrowUpRightFromSquare } />
              </div>
              <span className="text-xl font-bold">GoblinTown</span>
              <p className="text-md leading-5 text-gray-500 mb-2 mt-1 line line-clamp-3">Wallet01 provides a plug n' play. Wallet01 package lets you interact with wallets of different ecosystems.</p>
              <div className="pt-2"><button className="border border-purple-600 mr-1 bg-purple-200 text-purple-700 font-semibold px-2 text-sm rounded-full">Ethereum</button> <button className="border border-black px-2 text-sm font-semibold rounded-full">Polygon</button></div>
              </div>            
              <div className="bg-gray-50 flex justify-between py-3 px-5 mt-7 rounded-b-2xl">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">
                    <FontAwesomeIcon icon= {faEye} />
                  </div>
                  <div className="ml-1">
                    <span className="text-gray-600 text-sm">35</span>
                  </div>
                </div>

                <div className="flex items-center bg-white lg:hover:border-gray-400 duration-150 border border-gray-200 px-4 py-1 rounded-2xl">
                  <div className="w-4">
                    <FontAwesomeIcon icon= { faHeart } />
                  </div>
                  <div className="ml-2">
                    <span>4</span>
                  </div>
                </div>

              </div>
          </div>

          <div className="rounded-2xl border flex flex-col justify-between relative lg:cursor-pointer lg:hover:-translate-y-1 ease-linear duration-150">
              <div className="px-5 py-7">
              <div className="w-[4.5rem] mb-4 border rounded-full"><img className="rounded-full" src={imageseven} alt="project seven"/></div>
              <div className="top-5 right-4 absolute border rounded-full px-2 h-8 w-8">
                <FontAwesomeIcon className="text-xs" icon={ faArrowUpRightFromSquare } />
              </div>
              <span className="text-xl font-bold">Aztec</span>
              <p className="text-md leading-5 text-gray-500 mb-2 mt-1 line-clamp-3">Wallet01 provides Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi dignissimos, fugit, similique, consequuntur quis libero distinctio cum iusto fugiat veniam nemo sequi vero et ex totam nulla quibusdam sunt. a plug n' play architecture to make your app chain agnostic. Wallet01 package lets you interact with wallets of different ecosystems.</p>
              <div className="pt-2"><button className="border border-purple-600 mr-1 bg-purple-200 text-purple-700 font-semibold px-2 text-sm rounded-full">Ethereum</button> <button className="border border-black px-2 text-sm font-semibold rounded-full">Polygon</button></div>
              </div>            
              <div className="bg-gray-50 flex justify-between py-3 px-5 mt-7 rounded-b-2xl">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">
                    <FontAwesomeIcon icon= {faEye} />
                  </div>
                  <div className="ml-1">
                    <span className="text-gray-600 text-sm">35</span>
                  </div>
                </div>

                <div className="flex items-center bg-white lg:hover:border-gray-400 duration-150 border border-gray-200 px-4 py-1 rounded-2xl">
                  <div className="w-4">
                    <FontAwesomeIcon icon= { faHeart } />
                  </div>
                  <div className="ml-2">
                    <span>4</span>
                  </div>
                </div>

              </div>
          </div>

          <div className="rounded-2xl border flex flex-col justify-between relative lg:cursor-pointer lg:hover:-translate-y-1 ease-linear duration-150">
              <div className="px-5 py-7">
              <div className="w-[4.5rem] mb-4 border rounded-full"><img className="rounded-full" src={imageeight} alt="project eight"/></div>
              <div className="top-5 right-4 absolute border rounded-full px-2 h-8 w-8">
                <FontAwesomeIcon className="text-xs" icon={ faArrowUpRightFromSquare } />
              </div>
              <span className="text-xl font-bold">Humankind</span>
              <p className="text-md leading-5 text-gray-500 mb-2 mt-1 line-clamp-3">Wallet01 provides a plug n' play architecture to make your app chain agnostic. Wallet01 package lets you interact with wallets of different ecosystems.</p>
              <div className="pt-2"><button className="border border-purple-600 mr-1 bg-purple-200 text-purple-700 font-semibold px-2 text-sm rounded-full">Ethereum</button> <button className="border border-black px-2 text-sm font-semibold rounded-full">Polygon</button></div>
              </div>            
              <div className="bg-gray-50 flex justify-between py-3 px-5 mt-7 rounded-b-2xl">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">
                    <FontAwesomeIcon icon= {faEye} />
                  </div>
                  <div className="ml-1">
                    <span className="text-gray-600 text-sm">35</span>
                  </div>
                </div>

                <div className="flex items-center bg-white lg:hover:border-gray-400 duration-150 border border-gray-200 px-4 py-1 rounded-2xl">
                  <div className="w-4">
                    <FontAwesomeIcon icon= { faHeart } />
                  </div>
                  <div className="ml-2">
                    <span>4</span>
                  </div>
                </div>

              </div>
          </div>

          <div className="rounded-2xl border flex flex-col justify-between relative lg:cursor-pointer lg:hover:-translate-y-1 ease-linear duration-150">
              <div className="px-5 py-7">
              <div className="w-[4.5rem] mb-4 border rounded-full"><img className="rounded-full" src={ imageone } alt="project one"/></div>
              <div className="top-5 right-4 absolute border rounded-full px-2 h-8 w-8">
                <FontAwesomeIcon className="text-xs" icon={ faArrowUpRightFromSquare } />
              </div>
              <span className="text-xl font-bold">Wallet01</span>
              <p className="text-md leading-5 text-gray-500 mb-2 mt-1 line-clamp-3">Wallet01 provides a plug n' play architecture to make your app chain agnostic. Wallet01 package lets you interact with wallets of different ecosystems.</p>
              <div className="pt-2"><button className="border border-purple-600 mr-1 bg-purple-200 text-purple-700 font-semibold px-2 text-sm rounded-full">Ethereum</button> <button className="border border-black px-2 text-sm font-semibold rounded-full">Polygon</button></div>
              </div>            
              <div className="bg-gray-50 flex justify-between py-3 px-5 mt-7 rounded-b-2xl">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">
                    <FontAwesomeIcon icon= {faEye} />
                  </div>
                  <div className="ml-1">
                    <span className="text-gray-600 text-sm">35</span>
                  </div>
                </div>

                <div className="flex items-center bg-white lg:hover:border-gray-400 duration-150 border border-gray-200 px-4 py-1 rounded-2xl">
                  <div className="w-4">
                    <FontAwesomeIcon icon= { faHeart } />
                  </div>
                  <div className="ml-2">
                    <span>4</span>
                  </div>
                </div>

              </div>
          </div>

          <div className="rounded-2xl border flex flex-col justify-between relative lg:cursor-pointer lg:hover:-translate-y-1 ease-linear duration-150">
              <div className="px-5 py-7">
              <div className="w-[4.5rem] mb-4 border rounded-full"><img className="rounded-full" src={imagetwo} alt="project two"/></div>
              <div className="top-5 right-4 absolute border rounded-full px-2 h-8 w-8">
                <FontAwesomeIcon className="text-xs" icon={ faArrowUpRightFromSquare } />
              </div>
              <span className="text-xl font-bold">Launchifi</span>
              <p className="text-md leading-5 text-gray-500 mb-2 mt-1 line-clamp-3">Wallet01 provides a plug n' play. Wallet01 package lets you interact with wallets of different ecosystems.</p>
              <div className="pt-2"><button className="border border-purple-600 mr-1 bg-purple-200 text-purple-700 font-semibold px-2 text-sm rounded-full">Ethereum</button> <button className="border border-black px-2 text-sm font-semibold rounded-full">Polygon</button></div>
              </div>            
              <div className="bg-gray-50 flex justify-between py-3 px-5 mt-7 rounded-b-2xl">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">
                    <FontAwesomeIcon icon= {faEye} />
                  </div>
                  <div className="ml-1">
                    <span className="text-gray-600 text-sm">35</span>
                  </div>
                </div>

                <div className="flex items-center bg-white lg:hover:border-gray-400 duration-150 border border-gray-200 px-4 py-1 rounded-2xl">
                  <div className="w-4">
                    <FontAwesomeIcon icon= { faHeart } />
                  </div>
                  <div className="ml-2">
                    <span>4</span>
                  </div>
                </div>

              </div>
          </div>

          <div className="rounded-2xl border flex flex-col justify-between relative lg:cursor-pointer lg:hover:-translate-y-1 ease-linear duration-150">
              <div className="px-5 py-7">
              <div className="w-[4.5rem] mb-4 border rounded-full"><img className="rounded-full" src={imagethree} alt="project three"/></div>
              <div className="top-5 right-4 absolute border rounded-full px-2 h-8 w-8">
                <FontAwesomeIcon className="text-xs" icon={ faArrowUpRightFromSquare } />
              </div>
              <span className="text-xl font-bold">Al Mint</span>
              <p className="text-md leading-5 text-gray-500 mb-2 mt-1 line-clamp-3">Wallet01 provides Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi dignissimos, fugit, similique, consequuntur quis libero distinctio cum iusto fugiat veniam nemo sequi vero et ex totam nulla quibusdam sunt. a plug n' play architecture to make your app chain agnostic. Wallet01 package lets you interact with wallets of different ecosystems.</p>
              <div className="pt-2"><button className="border border-purple-600 mr-1 bg-purple-200 text-purple-700 font-semibold px-2 text-sm rounded-full">Ethereum</button> <button className="border border-black px-2 text-sm font-semibold rounded-full">Polygon</button></div>
              </div>            
              <div className="bg-gray-50 flex justify-between py-3 px-5 mt-7 rounded-b-2xl">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">
                    <FontAwesomeIcon icon= {faEye} />
                  </div>
                  <div className="ml-1">
                    <span className="text-gray-600 text-sm">35</span>
                  </div>
                </div>

                <div className="flex items-center bg-white lg:hover:border-gray-400 duration-150 border border-gray-200 px-4 py-1 rounded-2xl">
                  <div className="w-4">
                    <FontAwesomeIcon icon= { faHeart } />
                  </div>
                  <div className="ml-2">
                    <span>4</span>
                  </div>
                </div>

              </div>
          </div>

          <div className="rounded-2xl border flex flex-col justify-between relative lg:cursor-pointer lg:hover:-translate-y-1 ease-linear duration-150">
              <div className="px-5 py-7">
              <div className="w-[4.5rem] mb-4 border rounded-full"><img className="rounded-full" src={imagefour} alt="project four"/></div>
              <div className="top-5 right-4 absolute border rounded-full px-2 h-8 w-8">
                <FontAwesomeIcon className="text-xs" icon={ faArrowUpRightFromSquare } />
              </div>
              <span className="text-xl font-bold">YOOts</span>
              <p className="text-md leading-5 text-gray-500 mb-2 mt-1 line-clamp-3">Wallet01 provides a plug n' play architecture to make your app chain agnostic. Wallet01 package lets you interact with wallets of different ecosystems.</p>
              <div className="pt-2"><button className="border border-purple-600 mr-1 bg-purple-200 text-purple-700 font-semibold px-2 text-sm rounded-full">Ethereum</button> <button className="border border-black px-2 text-sm font-semibold rounded-full">Polygon</button></div>
              </div>            
              <div className="bg-gray-50 flex justify-between py-3 px-5 mt-7 rounded-b-2xl">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">
                    <FontAwesomeIcon icon= {faEye} />
                  </div>
                  <div className="ml-1">
                    <span className="text-gray-600 text-sm">35</span>
                  </div>
                </div>

                <div className="flex items-center bg-white lg:hover:border-gray-400 duration-150 border border-gray-200 px-4 py-1 rounded-2xl">
                  <div className="w-4">
                    <FontAwesomeIcon icon= { faHeart } />
                  </div>
                  <div className="ml-2">
                    <span>4</span>
                  </div>
                </div>

              </div>
          </div>

          <div className="rounded-2xl border flex flex-col justify-between relative lg:cursor-pointer lg:hover:-translate-y-1 ease-linear duration-150">
              <div className="px-5 py-7">
              <div className="w-[4.5rem] mb-4 border rounded-full"><img className="rounded-full" src={ imagefive } alt="project five"/></div>
              <div className="top-5 right-4 absolute border rounded-full px-2 h-8 w-8">
                <FontAwesomeIcon className="text-xs" icon={ faArrowUpRightFromSquare } />
              </div>
              <span className="text-xl font-bold">ThirdWeb</span>
              <p className="text-md leading-5 text-gray-500 mb-2 mt-1 line-clamp-3">Wallet01 provides a plug n' play architecture to make your app chain agnostic. Wallet01 package lets you interact with wallets of different ecosystems.</p>
              <div className="pt-2"><button className="border border-purple-600 mr-1 bg-purple-200 text-purple-700 font-semibold px-2 text-sm rounded-full">Ethereum</button> <button className="border border-black px-2 text-sm font-semibold rounded-full">Polygon</button></div>
              </div>            
              <div className="bg-gray-50 flex justify-between py-3 px-5 mt-7 rounded-b-2xl">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">
                    <FontAwesomeIcon icon= {faEye} />
                  </div>
                  <div className="ml-1">
                    <span className="text-gray-600 text-sm">35</span>
                  </div>
                </div>

                <div className="flex items-center bg-white lg:hover:border-gray-400 duration-150 border border-gray-200 px-4 py-1 rounded-2xl">
                  <div className="w-4">
                    <FontAwesomeIcon icon= { faHeart } />
                  </div>
                  <div className="ml-2">
                    <span>4</span>
                  </div>
                </div>

              </div>
          </div>

          <div className="rounded-2xl border flex flex-col justify-between relative lg:cursor-pointer lg:hover:-translate-y-1 ease-linear duration-150">
              <div className="px-5 py-7">
              <div className="w-[4.5rem] mb-4 border rounded-full"><img className="rounded-full" src={imagesix} alt="project six"/></div>
              <div className="top-5 right-4 absolute border rounded-full px-2 h-8 w-8">
                <FontAwesomeIcon className="text-xs" icon={ faArrowUpRightFromSquare } />
              </div>
              <span className="text-xl font-bold">GoblinTown</span>
              <p className="text-md leading-5 text-gray-500 mb-2 mt-1 line-clamp-3">Wallet01 provides a plug n' play. Wallet01 package lets you interact with wallets of different ecosystems.</p>
              <div className="pt-2"><button className="border border-purple-600 mr-1 bg-purple-200 text-purple-700 font-semibold px-2 text-sm rounded-full">Ethereum</button> <button className="border border-black px-2 text-sm font-semibold rounded-full">Polygon</button></div>
              </div>            
              <div className="bg-gray-50 flex justify-between py-3 px-5 mt-7 rounded-b-2xl">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">
                    <FontAwesomeIcon icon= {faEye} />
                  </div>
                  <div className="ml-1">
                    <span className="text-gray-600 text-sm">35</span>
                  </div>
                </div>

                <div className="flex items-center bg-white lg:hover:border-gray-400 duration-150 border border-gray-200 px-4 py-1 rounded-2xl">
                  <div className="w-4">
                    <FontAwesomeIcon icon= { faHeart } />
                  </div>
                  <div className="ml-2">
                    <span>4</span>
                  </div>
                </div>

              </div>
          </div>

          <div className="rounded-2xl border flex flex-col justify-between relative lg:cursor-pointer lg:hover:-translate-y-1 ease-linear duration-150">
              <div className="px-5 py-7">
              <div className="w-[4.5rem] mb-4 border rounded-full"><img className="rounded-full" src={imageseven} alt="projectseven"/></div>
              <div className="top-5 right-4 absolute border rounded-full px-2 h-8 w-8">
                <FontAwesomeIcon className="text-xs" icon={ faArrowUpRightFromSquare } />
              </div>
              <span className="text-xl font-bold">Aztec</span>
              <p className="text-md leading-5 text-gray-500 mb-2 mt-1 line-clamp-3">Wallet01 provides Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad eligendi dignissimos, fugit, similique, consequuntur quis libero distinctio cum iusto fugiat veniam nemo sequi vero et ex totam nulla quibusdam sunt. a plug n' play architecture to make your app chain agnostic. Wallet01 package lets you interact with wallets of different ecosystems.</p>
              <div className="pt-2"><button className="border border-purple-600 mr-1 bg-purple-200 text-purple-700 font-semibold px-2 text-sm rounded-full">Ethereum</button> <button className="border border-black px-2 text-sm font-semibold rounded-full">Polygon</button></div>
              </div>            
              <div className="bg-gray-50 flex justify-between py-3 px-5 mt-7 rounded-b-2xl">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">
                    <FontAwesomeIcon icon= {faEye} />
                  </div>
                  <div className="ml-1">
                    <span className="text-gray-600 text-sm">35</span>
                  </div>
                </div>

                <div className="flex items-center bg-white lg:hover:border-gray-400 duration-150 border border-gray-200 px-4 py-1 rounded-2xl">
                  <div className="w-4">
                    <FontAwesomeIcon icon= { faHeart } />
                  </div>
                  <div className="ml-2">
                    <span>4</span>
                  </div>
                </div>

              </div>
          </div>

          <div className="rounded-2xl border flex flex-col justify-between relative lg:cursor-pointer lg:hover:-translate-y-1 ease-linear duration-150">
              <div className="px-5 py-7">
              <div className="w-[4.5rem] mb-4 border rounded-full"><img className="rounded-full" src={imageeight} alt="project eight"/></div>
              <div className="top-5 right-4 absolute border rounded-full px-2 h-8 w-8">
                <FontAwesomeIcon className="text-xs" icon={ faArrowUpRightFromSquare } />
              </div>
              <span className="text-xl font-bold">Humankind</span>
              <p className="text-md leading-5 text-gray-500 mb-2 mt-1 line-clamp-3">Wallet01 provides a plug n' play architecture to make your app chain agnostic. Wallet01 package lets you interact with wallets of different ecosystems.</p>
              <div className="pt-2"><button className="border border-purple-600 mr-1 bg-purple-200 text-purple-700 font-semibold px-2 text-sm rounded-full">Ethereum</button> <button className="border border-black px-2 text-sm font-semibold rounded-full">Polygon</button></div>
              </div>            
              <div className="bg-gray-50 flex justify-between py-3 px-5 mt-7 rounded-b-2xl">
                <div className="flex items-center">
                  <div className="w-5 text-gray-500">
                    <FontAwesomeIcon icon= {faEye} />
                  </div>
                  <div className="ml-1">
                    <span className="text-gray-600 text-sm">35</span>
                  </div>
                </div>

                <div className="flex items-center bg-white lg:hover:border-gray-400 duration-150 border border-gray-200 px-4 py-1 rounded-2xl">
                  <div className="w-4">
                    <FontAwesomeIcon icon= { faHeart } />
                  </div>
                  <div className="ml-2">
                    <span>4</span>
                  </div>
                </div>

              </div>
          </div>

        </div>
  </div>;
};

export default ProjectList;
