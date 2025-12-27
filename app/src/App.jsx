import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src="/logo.png" alt="My Logo" />
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  )

}

const ResturantCard = (props) => {

  const { resData } = props
  const { name, cuisines, avgRating, deliveryTime } = resData?.card.info
  return (
    <div className='res-card' style={{ backgroundColor: '#f0f0f0' }}>
      <img className='res-logo' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + resData.card.info.cloudinaryImageId} alt="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>{avgRating} Rating</h4>
      <h4>{resData.card.info.sla.deliveryTime} Minutes</h4>

    </div>
  )
}
const resList = [

  {

    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "402478",
        name: "Chick N Chick Fast Food",
        cloudinaryImageId: "fvfollsfyoescloiwdoy",
        locality: "MK Road",
        areaName: "Railway Station",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Fast Food", "Kerala"],
        avgRating: 4.4,
        parentId: "243664",
        avgRatingString: "4.4",
        totalRatingsString: "3.5K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 0.2,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "0.2 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-12-26 23:59:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {},
            textBased: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹89",
          logoCtx: { text: "BENEFITS" }
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {}
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: { rating: "--" }
        },
        ratingsDisplayPreference:
          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {},
      cta: {
        link:
          "swiggy://menu?restaurant_id=402478&source=collection&query=Biryani",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK"
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD"
    }

  },

  {

    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "473419",
        name: "Ghazal",
        cloudinaryImageId: "6a291877dd87229dd73ebebdd58ffb3e",
        locality: "PS Road",
        areaName: "SN Park",
        costForTwo: "₹350 for two",
        cuisines: ["Chinese", "Arabian", "Biryani", "Kerala"],
        avgRating: 4.3,
        parentId: "87259",
        avgRatingString: "4.3",
        totalRatingsString: "3.3K+",
        promoted: true,
        sla: {
          deliveryTime: 30,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-12-26 23:30:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Biryani.png",
              description: "Delivery!"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "Rxawards/_CATEGORY-Biryani.png",
                    description: "Delivery!"
                  }
                }
              ]
            },
            textExtendedBadges: {},
            textBased: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹159",
          logoCtx: { text: "BENEFITS" }
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {}
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: { rating: "--" }
        },
        ratingsDisplayPreference:
          "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {},
      cta: {
        link:
          "swiggy://menu?restaurant_id=473419&source=collection&query=Biryani",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK"
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD"
    }

  },
  {
    card: {
      " @type": "type.googleapis.com / swiggy.presentation.food.v2.Restaurant",
      info: {
        id: 416467,
        name: "Chick N Chick Family Restaurant Rangoon",
        cloudinaryImageId: "ptxqywssr8vmegcgjr2f",
        locality: "MK Road",
        areaName: "Railway Station",
        costForTwo: "₹250 for two",
        cuisines: [
          "Chinese",
          "Biryani",
          "Fast Food"
        ],
        avgRating: 4.6,
        parentId: 231835,
        avgRatingString: "4.6",
        totalRatingsString: "2.4K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 0.2,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "0.2 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-12-26 23:59:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹69",
          logoCtx: {
            text: "BENEFITS"
          }
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {}
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=416467&source=collection&query=Biryani",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK"
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD"
    }

  },
  {
    card: {
      " @type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: 763010,
        name: "Hotel Sky Palace",
        cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/3/15/8ef4c186-5170-4fb2-8ba4-38774fc98d5e_3ca09050-a20e-46b6-8bbb-137e2a8add20.jpg",
        locality: "Thavakkara",
        areaName: "Kannur Town",
        costForTwo: "₹350 for two",
        cuisines: [
          "Indian",
          "Biryani",
          "Chinese",
          "Kerala"
        ],
        avgRating: 4.4,
        parentId: 450128,
        avgRatingString: "4.4",
        totalRatingsString: "6",
        promoted: true,
        adTrackingId: "cid=31823996~p=4~adgrpid=31823996#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=763010~plpr=COLLECTION~eid=0096e36d-a817-44c6-9f83-ed75181d00a4~srvts=1766766539890~collid=83639",
        sla: {
          deliveryTime: 46,
          lastMileTravel: 1.2,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "1.2 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-12-26 22:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {}
          }
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {}
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.7",
            ratingCount: "892"
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        campaignId: "31823996"
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=763010&source=collection&query=Biryani",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK"
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD"
    }

  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: 604525,
        name: "New City Light Restaurant",
        cloudinaryImageId: "455262e00504bf10451415a2063d554b",
        locality: "STATION ROAD KANNUR",
        areaName: "Kannur",
        costForTwo: "₹250 for two",
        cuisines: [
          "Snacks",
          "Biryani"
        ],
        avgRating: 4.1,
        parentId: 360304,
        avgRatingString: "4.1",
        totalRatingsString: "1.3K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 0.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "0.3 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2025-12-26 23:45:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
          logoCtx: {
            text: "BENEFITS"
          }
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {}
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--"
          }
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=604525&source=collection&query=Biryani",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK"
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD"
    }

  }

];



const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {
          resList.map(resturant => (<ResturantCard key={resturant.card.info.id} resData={resturant} />))
        }

      </div>

    </div>
  )

}




const App = () => {
  return (
    <div className='app'>
      <Header />
      <Body />

    </div>
  )
}

export default App
