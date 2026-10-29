const resMenu = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "Udupi Bhavan",
            headerStyling: {
              textColor: "text_Highest_Emphasis",
              textVariant: "header_H3_Black",
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            tabs: [
              {
                id: "Order Online",
                title: "Order Online",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "571805",
              name: "Udupi Bhavan",
              city: "Pune",
              slugs: {
                restaurant: "udupi-bhavan-kothrud-kothrud",
                city: "pune",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId: "xtjbziytzhxrnopxcg4b",
              locality: "Mayur Colony",
              areaName: "Kothrud",
              costForTwo: "30000",
              costForTwoMessage: "₹300 for two",
              cuisines: ["South Indian"],
              avgRating: 4.2,
              veg: true,
              feeDetails: {
                restaurantId: "571805",
                fees: [{}],
              },
              parentId: "13247",
              avgRatingString: "4.2",
              totalRatingsString: "2.7K+ ratings",
              sla: {
                restaurantId: "571805",
                deliveryTime: 24,
                minDeliveryTime: 20,
                maxDeliveryTime: 25,
                lastMileTravel: 5,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 105,
                slaString: "20-25 MINS",
                lastMileTravelString: "5.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2026-10-29 22:00:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                shortDescriptionList: [
                  {
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "freedel",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "udupi-bhavan-kothrud-kothrud",
              multiOutlet: true,
              isOpen: true,
              labels: [
                {
                  title: "Timings",
                  message: "null",
                },
                {
                  title: "Address",
                  message:
                    "SR NO 129,130,131A,131B,PLOT NO 90, SHOP  NO 1 UPPER GROUND FLOOR, SANSKRUTI  PRATIBIMB, MAYUR COLONY, KOTHRUD, Karve  Road, Pune, Maharashtra-411038",
                },
                {
                  title: "Cuisines",
                  message: "South Indian",
                },
              ],
              totalRatings: 2700,
              aggregatedDiscountInfoV2: {
                shortDescriptionList: [
                  {
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "freedel",
                    discountType: "FREE_DELIVERY",
                    operationType: "RESTAURANT",
                  },
                ],
              },
              type: "F",
              similarRestaurantAvailable: "false",
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/571805",
              },
              tradeCampaignHeadersV2: [
                {
                  discountType: "FREE_DELIVERY",
                },
              ],
              ratingSlab: "RATING_SLAB_5",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              latLong: "18.506050917361,73.8176310468119",
              backgroundImageOverlayInfo: {},
              featuredSectionInfo: {},
              timingsInfo: {
                status: "Open now",
                message: "Closes 10:00 pm",
                outletTiming: {
                  infoList: [
                    {
                      title: "Monday",
                      subtitle: "7.00AM - 10.00PM",
                      titleColor: "text_high_emphasis",
                      subtitleColor: "text_high_emphasis",
                    },
                    {
                      title: "Tuesday",
                      subtitle: "7.00AM - 10.00PM",
                      titleColor: "text_high_emphasis",
                      subtitleColor: "text_high_emphasis",
                    },
                    {
                      title: "Wednesday",
                      subtitle: "7.00AM - 10.00PM",
                      titleColor: "text_high_emphasis",
                      subtitleColor: "text_high_emphasis",
                    },
                    {
                      title: "Thursday",
                      subtitle: "7.00AM - 10.00PM",
                      titleColor: "primary",
                      subtitleColor: "primary",
                    },
                    {
                      title: "Friday",
                      subtitle: "7.00AM - 10.00PM",
                      titleColor: "text_high_emphasis",
                      subtitleColor: "text_high_emphasis",
                    },
                    {
                      title: "Saturday",
                      subtitle: "7.00AM - 10.00PM",
                      titleColor: "text_high_emphasis",
                      subtitleColor: "text_high_emphasis",
                    },
                    {
                      title: "Sunday",
                      subtitle: "7.00AM - 10.00PM",
                      titleColor: "text_high_emphasis",
                      subtitleColor: "text_high_emphasis",
                    },
                  ],
                  title: "Outlet timings",
                },
                styleInfo: {
                  titleColor: "positive",
                  subtitleColor: "text_color_low_emphasis",
                },
              },
              phone: "9604556767",
              postalCode: "411038",
              state: "Maharashtra",
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_AND_SHOW_MENU_OFFER_NUDGE",
            sectionId: "MENU_ITEM_CART_UPDATE_POP_CROUTON",
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      isPureVeg: true,
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      topRatedFilter: {
                        attributes: {
                          displayText: "Ratings 4.0+",
                        },
                      },
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: "Kids Favourites",
                          tooltip: {
                            enabled: true,
                            displayText:
                              "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                          },
                        },
                      },
                      vegFilter: {
                        attributes: {
                          displayText: "VEG",
                        },
                      },
                      nonvegFilter: {
                        attributes: {
                          displayText: "NONVEG",
                        },
                      },
                    },
                    relevance: {
                      type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      sectionId: "MENU_FILTER_TOGGLE",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642243",
                              name: "Butter Idli",
                              category: "Idali/wada/appe",
                              description:
                                "A delectable and velvety delight packed with buttery goodness, perfect for a heavenly breakfast treat.",
                              imageId: "33878cfe439b9658d832d11200a4706d",
                              inStock: 1,
                              isVeg: 1,
                              price: 7500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192859826",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "52 ratings",
                                  ratingCountV2: "52",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199071",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "7500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642246",
                              name: "Podi Idli",
                              category: "Idali/wada/appe",
                              description:
                                "A flavorful and aromatic South Indian specialty, perfect for a delightful and satisfying breakfast.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/25/0b707b94-6e4f-4d78-8d2a-e88fc49292cc_06f36ac0-d92f-4801-b063-6a7e4eafdbbe.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 8500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192859844",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "130 ratings",
                                  ratingCountV2: "130",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199100",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "8500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642288",
                              name: "Sabudana Wada",
                              category: "Snacks",
                              description:
                                "Indulge in a delectable, vegetarian snack bursting with flavors and a satisfying crunch.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/3/18/b51178aa-c8e2-4b1f-b308-0ee4994f8af3_f0b9c939-00ec-4a60-99ce-96c646f96590.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 7500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "198 ratings",
                                  ratingCountV2: "198",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199105",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "7500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642283",
                              name: "Upma",
                              category: "Snacks",
                              description:
                                "A flavor-packed veg delight perfect for snacking anytime.",
                              imageId: "54a85ba5d655522d04d5795f5034814c",
                              inStock: 1,
                              isVeg: 1,
                              price: 5500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "514 ratings",
                                  ratingCountV2: "514",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              imageBadges: [
                                {
                                  imageId:
                                    "Health%20Hub/Sub%20categories/Item%20badges/Low%20cal%201_1.png",
                                },
                              ],
                              parentId: "5096042",
                              menuFilterIds: [
                                "EATRIGHT",
                                "bestseller",
                                "VEG",
                                "toprated",
                              ],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "5500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642308",
                              name: "Tea",
                              category: "Beverages",
                              description:
                                "A refreshing and aromatic beverage that invigorates the senses with its exquisite flavors and warm embrace.",
                              imageId: "37effea7e83d66297ad68625b86d41dd",
                              inStock: 1,
                              isVeg: 1,
                              price: 2500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "190 ratings",
                                  ratingCountV2: "190",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "5096028",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "2500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185180",
                              name: "Hot Bournvita",
                              category: "Beverages",
                              description:
                                "Indulge in the delightful flavors of a soul-warming and luscious hot beverage.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/7/f0bb1ec6-69d2-41d6-8335-be3cb0c8238d_15d8269d-02b0-4368-bd3f-333e0d4b3567.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "16 ratings",
                                  ratingCountV2: "16",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135457",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "5000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185183",
                              name: "Black Tea",
                              category: "Beverages",
                              description:
                                "Indulge in the rich, aromatic flavors of this exquisite black tea, a refreshing and satisfying beverage.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/1/23/b40f5b66-fdc7-4604-81f7-f9afc3744e86_c5c46703-5921-48ce-8064-56a825408b3a.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 2500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "79135448",
                              menuFilterIds: ["VEG"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "2500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      type: "CATEGORY_TYPE_RECOMMENDED",
                      subtitleSuffix: {},
                      categoryId: "-1",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Idali/wada/appe",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185145",
                              name: "Idli Sambhar",
                              category: "Idali/wada/appe",
                              description:
                                "Delight in fluffy, savory rice cakes paired with a rich, aromatic lentil stew, creating a perfect harmony of flavors.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/25/e4f384a5-a93a-47ee-87bb-6f015e131173_b5e64e1d-6c72-449b-bdb7-c870b7765ae6.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 7000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192855045",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "494 ratings",
                                  ratingCountV2: "494",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135459",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "7000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185147",
                              name: "Medu Wada Sambhar",
                              category: "Idali/wada/appe",
                              description:
                                "A delectable and flavorsome vegetarian breakfast option paired with a fragrant lentil soup.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/25/62e03fc4-208b-4534-9fee-93fba0a70cd9_95404c45-1b04-4907-b248-30d98bb6264f.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 8500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "615 ratings",
                                  ratingCountV2: "615",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135463",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "8500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185151",
                              name: "Idli Fry",
                              category: "Idali/wada/appe",
                              description:
                                "Crispy, golden bites with a rich, savory flavor, perfect for any time of the day.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/25/439fc676-5101-459f-85fd-5f217681e870_400f655a-97bc-4cb5-b3ef-265cb11fdbc0.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 7500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192855068",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "135 ratings",
                                  ratingCountV2: "135",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199091",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "7500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185146",
                              name: "Idli Chutney",
                              category: "Idali/wada/appe",
                              description:
                                "Light and fluffy steamed cakes paired with a rich, flavorful condiment create a delightful taste experience.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/25/b6feaed4-90dc-4878-97ae-a33fea1e1c09_b32930c9-8432-4346-bc4b-1f075a3b623e.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192855057",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "182 ratings",
                                  ratingCountV2: "182",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135458",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "6000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642254",
                              name: "Appe",
                              category: "Idali/wada/appe",
                              description:
                                "A popular South Indian delicacy perfect to start your morning with its delightful flavors and satisfying crispness.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/25/c9c7764f-8afb-4672-ba3f-267bddc2596d_7f469c1f-7f5c-4443-8912-7ecb8bc3013f.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 7500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "424 ratings",
                                  ratingCountV2: "424",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199068",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "7500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642250",
                              name: "Idli Medu Wada",
                              category: "Idali/wada/appe",
                              description:
                                "Enjoy a delightful combination of soft, fluffy cakes paired with crispy golden fritters, creating a perfect harmony of textures and flavors that's irresistible any time of day.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/9/7d9bda47-c958-45b5-ad6d-9e9a92d5b02c_b6f65e36-b74a-4e83-98e2-caeaa3673230.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 7500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192859852",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "108 ratings",
                                  ratingCountV2: "108",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199092",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "7500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185148",
                              name: "Medu Wada Chutney",
                              category: "Idali/wada/appe",
                              description:
                                "A delectable vegetarian breakfast option with a tempting accompaniment.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/2/521182ea-6b87-405c-9bb2-9a42375afbd7_afb068a7-b3fe-4ef6-b024-4b6e2ee55f16.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 7500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "142 ratings",
                                  ratingCountV2: "142",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135462",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "7500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642245",
                              name: "Ghee Tatte Idli",
                              category: "Idali/wada/appe",
                              description:
                                "Indulge in a delectable and heavenly South Indian breakfast treat crafted with utmost love and care.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/8/11/39fcc363-f6ec-4c7f-8656-bdf562bd4646_4c58824e-d097-4631-a96f-ed5557cf654d.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 7500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192859837",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "76 ratings",
                                  ratingCountV2: "76",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199089",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_final_price: "0",
                                swiggy_listing_price: "7500",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "105100218",
                              name: "Ghee Podi Idli",
                              category: "Idali/wada/appe",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/13/c90a4242-73c1-4836-b751-6813e2501619_3e920d04-b33c-40ad-953a-583bfd97ce1f.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192855032",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "45 ratings",
                                  ratingCountV2: "45",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "59882076",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "8000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642246",
                              name: "Podi Idli",
                              category: "Idali/wada/appe",
                              description:
                                "A flavorful and aromatic South Indian specialty, perfect for a delightful and satisfying breakfast.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/25/0b707b94-6e4f-4d78-8d2a-e88fc49292cc_06f36ac0-d92f-4801-b063-6a7e4eafdbbe.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 8500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192859844",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "130 ratings",
                                  ratingCountV2: "130",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199100",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "8500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642243",
                              name: "Butter Idli",
                              category: "Idali/wada/appe",
                              description:
                                "A delectable and velvety delight packed with buttery goodness, perfect for a heavenly breakfast treat.",
                              imageId: "33878cfe439b9658d832d11200a4706d",
                              inStock: 1,
                              isVeg: 1,
                              price: 7500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192859826",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "52 ratings",
                                  ratingCountV2: "52",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199071",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "7500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "105100216",
                              name: "Ghee Appe",
                              category: "Idali/wada/appe",
                              description:
                                "A savory and flavorful Indian breakfast delicacy cooked in ghee, ready to tantalize your taste buds.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/31/10d4b6ea-ca7f-4224-90c9-8146b9827bea_4995cfa8-da81-4414-834e-b30a54519751.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 9000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "54 ratings",
                                  ratingCountV2: "54",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "59882074",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "9000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185149",
                              name: "Mix Wada",
                              category: "Idali/wada/appe",
                              description:
                                "Savor the delightful blend of textures and flavors in this crispy, golden treat, perfect for any time of day.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/2/521182ea-6b87-405c-9bb2-9a42375afbd7_afb068a7-b3fe-4ef6-b024-4b6e2ee55f16.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 8500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "29 ratings",
                                  ratingCountV2: "29",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135466",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_final_price: "0",
                                swiggy_listing_price: "8500",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642244",
                              name: "Tatte Idli",
                              category: "Idali/wada/appe",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/4/25/bb6e572d-27ae-4777-99a7-f1b977f02d9d_712e4314-e8b4-4c38-befd-9951df68a2f0.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 6000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192859831",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "64 ratings",
                                  ratingCountV2: "64",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199109",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "6000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642252",
                              name: "Dahi Wada",
                              category: "Idali/wada/appe",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/9/1/ed991a1b-3ed0-4558-95e6-be02bce40db3_e1dd45f0-8826-4ef9-a986-cef1e99bbfda.jpg",
                              isVeg: 1,
                              price: 9000,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 7 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "57 ratings",
                                  ratingCountV2: "57",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "57838050",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "9000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642248",
                              name: "Dahi Idli",
                              category: "Idali/wada/appe",
                              description:
                                "A delectable fusion of soft idlis and creamy curd, perfect for a delightful and refreshing breakfast.",
                              imageId: "809f02015e37b30daaf93b2fa31fc25d",
                              isVeg: 1,
                              price: 8500,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192859846",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              nextAvailableAtMessage:
                                "Next available at 7 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199075",
                              menuFilterIds: ["VEG"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "8500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "33878cfe439b9658d832d11200a4706d",
                      categoryId: "45992256",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Dosa",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642266",
                              name: "Mysore Masala Dosa",
                              category: "Dosa",
                              description:
                                "A flavorsome and delightful South Indian specialty served with condiments.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/15/1d3f4794-eb2e-419c-a775-cebbf3198d22_0532fc57-3f65-48da-895b-d10f6dc0a473.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 12500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "39119953",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "124199290",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Ghee",
                                        price: 2000,
                                        id: "124199291",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Cheese",
                                        price: 3000,
                                        id: "124199292",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192861064",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "161 ratings",
                                  ratingCountV2: "161",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "5095894",
                              menuFilterIds: ["bestseller", "VEG"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "12500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642260",
                              name: "Masala Dosa",
                              category: "Dosa",
                              description:
                                "A flavorful and flavorsome South Indian specialty that combines a crispy and tender outer shell with a delightful assortment of rich and aromatic fillings.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/15/2ea53a1c-6315-4af2-abdc-dfacad030395_6fb3df1c-d86a-4673-a329-b586f4fcde31.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 10500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "39119951",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "124199284",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Ghee",
                                        price: 2000,
                                        id: "124199285",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Cheese",
                                        price: 3000,
                                        id: "124199286",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192867449",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "342 ratings",
                                  ratingCountV2: "342",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              imageBadges: [
                                {
                                  imageId:
                                    "Health%20Hub/Sub%20categories/Item%20badges/Low%20cal%201_1.png",
                                },
                              ],
                              parentId: "5095857",
                              menuFilterIds: [
                                "EATRIGHT",
                                "bestseller",
                                "VEG",
                                "toprated",
                              ],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "10500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642255",
                              name: "Set Sponge Dosa",
                              category: "Dosa",
                              description:
                                "A delectable and fluffy dosa that offers a delightful texture to savor.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/15/e6fe0a9b-40c9-4d5b-8f0e-9a4d274e5a54_50c25e76-c3fc-4f0d-9446-132bf0ac8096.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 9500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "39119959",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "124199308",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Ghee",
                                        price: 2500,
                                        id: "124199309",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192867438",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "356 ratings",
                                  ratingCountV2: "356",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199107",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "9500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185154",
                              name: "Onion Uttappam",
                              category: "Dosa",
                              description:
                                "A savory, flavorful South Indian specialty featuring a crispy golden base topped with caramelized onion a delightful treat for dosa lovers.",
                              imageId: "pzfpvovny8nzqdhokze8",
                              inStock: 1,
                              isVeg: 1,
                              price: 10500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "39119954",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "124199293",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Ghee",
                                        price: 2000,
                                        id: "124199294",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Cheese",
                                        price: 3000,
                                        id: "124199295",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "173 ratings",
                                  ratingCountV2: "173",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135471",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "10500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185152",
                              name: "Sadha Dosa",
                              category: "Dosa",
                              description:
                                "A classic and flavorful South Indian specialty, Sadha Dosa is a delightful and delectable vegetarian delight that is sure to satisfy.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/16/6c27d758-8d5c-4544-b836-9e26376c8780_797eb2d7-06bf-42ea-a969-052b379320b6.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 9000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "39119950",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "124199281",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Ghee",
                                        price: 2000,
                                        id: "124199282",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Cheese",
                                        price: 2500,
                                        id: "124199283",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192855079",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "106 ratings",
                                  ratingCountV2: "106",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135477",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "9000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185156",
                              name: "Onion Tomato Uttappam",
                              category: "Dosa",
                              description:
                                "A delectable and flavorful Uttappam topped with onions and tomatoes, a delightful choice for vegetarian Dosa enthusiasts.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/16/6fae6c54-5ad7-49e9-9fd2-e6fc746022e3_38d61295-cbce-4f1e-a34c-dc09ccc97666.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 12000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "39119956",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "124199299",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Ghee",
                                        price: 3000,
                                        id: "124199300",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Cheese",
                                        price: 3000,
                                        id: "124199301",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "117 ratings",
                                  ratingCountV2: "117",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135470",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "12000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642262",
                              name: "Paper Masala Dosa",
                              category: "Dosa",
                              description:
                                "A mouthwatering and flavorsome Indian delicacy with a thin, golden-brown crispy layer and a delightful filling.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/15/e961c79e-1d73-42d9-9973-c2c75221c900_1a53f038-aa54-4c9a-a96c-c4d64f88502e.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 14000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "39119962",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "124199316",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Ghee",
                                        price: 2500,
                                        id: "124199317",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Cheese",
                                        price: 3500,
                                        id: "124199318",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192867458",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "24 ratings",
                                  ratingCountV2: "24",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199098",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "14000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185153",
                              name: "Mysore Sadha Dosa",
                              category: "Dosa",
                              description:
                                "A delectable and flavorful vegetarian delicacy from South India, known for its scrumptious taste and unique Mysore-style preparation.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/16/df32fe64-3ae4-4880-a444-f5bae3638302_b2b0ca02-505b-441c-a87d-ddbee2d55e63.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 10500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "39119952",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "124199287",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Ghee",
                                        price: 2500,
                                        id: "124199288",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Cheese",
                                        price: 3500,
                                        id: "124199289",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192855086",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "81 ratings",
                                  ratingCountV2: "81",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135467",
                              menuFilterIds: ["VEG"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_final_price: "0",
                                swiggy_listing_price: "10500",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "105100198",
                              name: "Rawa Masala Dosa",
                              category: "Dosa",
                              description:
                                "A flavorful and aromatic South Indian delicacy with a crispy golden exterior and a savory filling.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/16/2897d720-a3d9-4562-a56c-ecf22eb9bc06_d01e1ba8-65ec-4b73-bae7-df04b6344f78.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "39119961",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "124199313",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Ghee",
                                        price: 2500,
                                        id: "124199314",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Cheese",
                                        price: 3500,
                                        id: "124199315",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192861102",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "62 ratings",
                                  ratingCountV2: "62",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "59882083",
                              menuFilterIds: ["VEG"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "11000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642265",
                              name: "Cut Dosa",
                              category: "Dosa",
                              description:
                                "A delectable and flavorful vegetable creation that embodies the essence of Dosa.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/15/1f2ec921-1555-4773-a311-5e9fe4b94f61_4f8ad3b8-b30a-4e2e-a9ca-2fa459491cba.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 10500,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "39119958",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "124199305",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Ghee",
                                        price: 2500,
                                        id: "124199306",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Cheese",
                                        price: 3500,
                                        id: "124199307",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192867463",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "86 ratings",
                                  ratingCountV2: "86",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199073",
                              menuFilterIds: ["VEG"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "10500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185159",
                              name: "Tomato Omelette",
                              category: "Dosa",
                              description:
                                "A tasty and delightful combination of fresh tomato flavors nestled in a golden dosa.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/3/27/8c24fc80-4a3c-483c-9c16-bd4dc2ff7372_4aba2bf1-d541-443e-a155-7214da1da1f6.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "30 ratings",
                                  ratingCountV2: "30",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135479",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_final_price: "0",
                                swiggy_listing_price: "11000",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185155",
                              name: "Onion Chilli Uttappam",
                              category: "Dosa",
                              description:
                                "A tasty and flavorful dosa with a delightful combination of onions and a touch of heat.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/7/30/cf4ab1c6-6d70-45da-9ce7-62a0cd7d4550_8b14c2c8-c779-4a69-a4fc-03cc07a9bf42.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 11000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "39119955",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "124199296",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Ghee",
                                        price: 3000,
                                        id: "124199297",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Cheese",
                                        price: 3000,
                                        id: "124199298",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "32 ratings",
                                  ratingCountV2: "32",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135469",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "11000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642271",
                              name: "Rawa Sada Dosa",
                              category: "Dosa",
                              description:
                                "A lip-smacking delight with a crispy golden exterior and a soft, smooth center, perfect for any Dosa lover.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/15/0292a752-4fad-4733-8438-36e0667cec80_bf639fec-ca84-465e-b3cf-7bdf00bb687d.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 10000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "39119960",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "124199310",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Ghee",
                                        price: 2500,
                                        id: "124199311",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Cheese",
                                        price: 3500,
                                        id: "124199312",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192861080",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "58 ratings",
                                  ratingCountV2: "58",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "59882084",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "10000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185158",
                              name: "Coconut Uttappam",
                              category: "Dosa",
                              description:
                                "A delectable and flavorful South Indian specialty packed with the rich and tropical essence of coconut.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/9/16/08fc4324-775e-4300-87f9-41413916def5_6ffa2933-5034-491d-a518-50fbac3ac2ba.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 12000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "39119963",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "124199319",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Ghee",
                                        price: 3000,
                                        id: "124199320",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Cheese",
                                        price: 4000,
                                        id: "124199321",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "7 ratings",
                                  ratingCountV2: "7",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135451",
                              menuFilterIds: ["VEG"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "12000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185157",
                              name: "Sadha Tomato Uttappam",
                              category: "Dosa",
                              description:
                                "A classic dosa delight bursting with the tangy goodness of fresh tomatoes, expertly prepared to satisfy your taste buds.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/7/11/0a3b14c9-c0ff-4be3-8a57-4852cc1508ac_3020f511-442a-48cf-a3b5-26c8f158346c.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 10000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "39119957",
                                    name: "Choice",
                                    variations: [
                                      {
                                        name: "Regular",
                                        default: 1,
                                        id: "124199302",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Ghee",
                                        price: 3000,
                                        id: "124199303",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Cheese",
                                        price: 4000,
                                        id: "124199304",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "14 ratings",
                                  ratingCountV2: "14",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135478",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "10000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642269",
                              name: "Upwas Dosa",
                              category: "Dosa",
                              description:
                                "A delectable and satisfying vegetarian Dosa, ideal for fasting, that will leave your taste buds wanting more.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/2/26/dd0c4553-5fc3-488e-b879-5a579c923e82_04a0288c-6134-4c80-b622-d341164390e3.jpg",
                              isVeg: 1,
                              price: 11000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192861074",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              nextAvailableAtMessage:
                                "Next available at 7 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199112",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "11000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642272",
                              name: "Neer Dosa",
                              category: "Dosa",
                              description:
                                "A light and delicate crepe-like delicacy, perfect for those who crave a delightful South Indian breakfast or snack.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/15/d7a3a33d-34c1-42f9-82b5-e0ba95b8a528_767f1103-ae37-4c31-8026-1993ba5e751f.JPG",
                              isVeg: 1,
                              price: 10000,
                              variants: {},
                              variantsV2: {},
                              addons: [
                                {
                                  groupId: "192861089",
                                  groupName: "Beverages",
                                  choices: [
                                    {
                                      id: "131267762",
                                      name: "Tea",
                                      price: 2000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267770",
                                      name: "Black Tea",
                                      price: 2500,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267766",
                                      name: "Hot Milk",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267765",
                                      name: "Black Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267764",
                                      name: "Nescafe",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267763",
                                      name: "Filter Coffee",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267769",
                                      name: "Green Tea",
                                      price: 6000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267768",
                                      name: "Lemon Tea",
                                      price: 3000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                    {
                                      id: "131267767",
                                      name: "Hot Bournvita",
                                      price: 4000,
                                      inStock: 1,
                                      isVeg: 1,
                                      isEnabled: 1,
                                    },
                                  ],
                                  maxAddons: -1,
                                  maxFreeAddons: -1,
                                },
                              ],
                              nextAvailableAtMessage:
                                "Next available at 7 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "81 ratings",
                                  ratingCountV2: "81",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "5095897",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "10000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "pzfpvovny8nzqdhokze8",
                      categoryId: "45992257",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Snacks",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642283",
                              name: "Upma",
                              category: "Snacks",
                              description:
                                "A flavor-packed veg delight perfect for snacking anytime.",
                              imageId: "54a85ba5d655522d04d5795f5034814c",
                              inStock: 1,
                              isVeg: 1,
                              price: 5500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "514 ratings",
                                  ratingCountV2: "514",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              imageBadges: [
                                {
                                  imageId:
                                    "Health%20Hub/Sub%20categories/Item%20badges/Low%20cal%201_1.png",
                                },
                              ],
                              parentId: "5096042",
                              menuFilterIds: [
                                "EATRIGHT",
                                "bestseller",
                                "VEG",
                                "toprated",
                              ],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "5500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642288",
                              name: "Sabudana Wada",
                              category: "Snacks",
                              description:
                                "Indulge in a delectable, vegetarian snack bursting with flavors and a satisfying crunch.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/3/18/b51178aa-c8e2-4b1f-b308-0ee4994f8af3_f0b9c939-00ec-4a60-99ce-96c646f96590.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 7500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "198 ratings",
                                  ratingCountV2: "198",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199105",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "7500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185170",
                              name: "Sabudana Khichadi",
                              category: "Snacks",
                              description:
                                "A delectable and flavorful vegetarian snack, consisting of pearls of sabudana (tapioca) cooked to perfection.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/16/f39a4017-9f53-4fbc-aa44-dd658af6c833_827f6bc4-6f0c-45a3-964a-2a39e9270796.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 6500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "100 ratings",
                                  ratingCountV2: "100",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              imageBadges: [
                                {
                                  imageId:
                                    "Health%20Hub/Sub%20categories/Item%20badges/Low%20cal%201_1.png",
                                },
                              ],
                              parentId: "79135476",
                              menuFilterIds: ["EATRIGHT", "VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "6500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642284",
                              name: "Sheera",
                              category: "Snacks",
                              description:
                                "A delectable, crowd-pleasing veggie snack bursting with delightful flavors and inviting textures.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/15/8948a85a-d0b1-43d5-959d-e4e436824f65_79a76de2-2061-43af-a71e-c142c3fd2b4f.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 5500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "161 ratings",
                                  ratingCountV2: "161",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "59882085",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "5500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185171",
                              name: "Bun Maska",
                              category: "Snacks",
                              description:
                                "A delectable and satisfying veg snack, bursting with flavor and perfect for any time of the day.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/13/75c84022-e3cb-44d4-bba1-e8e405251bd7_9e7b3656-2bd0-46fa-95a5-8336160e710a.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "74 ratings",
                                  ratingCountV2: "74",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135449",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "4000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642295",
                              name: "Mangalore Buns",
                              category: "Snacks",
                              description:
                                "Fluffy, golden-brown delights that boast a delightful blend of flavors, Mangalore Buns are a delectable choice for those seeking a delightful veg snack.",
                              imageId: "af74f252d70a97474ceeec571514231b",
                              isVeg: 1,
                              price: 7500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 7 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "257 ratings",
                                  ratingCountV2: "257",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "5095855",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "7500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/3/18/b51178aa-c8e2-4b1f-b308-0ee4994f8af3_f0b9c939-00ec-4a60-99ce-96c646f96590.jpg",
                      categoryId: "24376112",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Beverages",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185182",
                              name: "Green Tea",
                              category: "Beverages",
                              description:
                                "A refreshing and invigorating blend of green tea, perfect for a light and revitalizing beverage experience.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/2/26/b305e5ee-5802-4a7b-b068-66a39ec5835b_03950bf1-64a5-43de-a17d-d4fcd5ab810b.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 4000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.7",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135456",
                              menuFilterIds: ["VEG"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "4000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185180",
                              name: "Hot Bournvita",
                              category: "Beverages",
                              description:
                                "Indulge in the delightful flavors of a soul-warming and luscious hot beverage.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/2/7/f0bb1ec6-69d2-41d6-8335-be3cb0c8238d_15d8269d-02b0-4368-bd3f-333e0d4b3567.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "16 ratings",
                                  ratingCountV2: "16",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135457",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "5000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185177",
                              name: "Nescafe",
                              category: "Beverages",
                              description:
                                "Indulge in the rich and aromatic flavors of this refreshing and comforting veg beverage, perfect for those seeking a delectable and satisfying treat.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/10/13/eab645d3-3667-4b65-a905-84fa6d45495c_e7e65ccd-b451-475b-b70d-f9c08d94f471.jpeg",
                              inStock: 1,
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135468",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "4500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185179",
                              name: "Hot Milk",
                              category: "Beverages",
                              description:
                                "A comforting and creamy warm drink that will soothe your senses and make you feel instantly cozy.",
                              inStock: 1,
                              isVeg: 1,
                              price: 5000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "5095805",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "5000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185178",
                              name: "Black Coffee",
                              category: "Beverages",
                              description:
                                "Indulge in the rich and aromatic goodness of this bold and invigorating beverage, known for its distinctive flavor and satisfying warmth.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/2/27/4506981a-68a2-4794-95f9-4d0137e761bb_4f64ae61-5a46-4a9f-8e92-d02ceb59a765.jpg",
                              inStock: 1,
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#D9EFEC", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_medium",
                                  ratingTextColor: "rating_medium",
                                  ratingCountTextColor: "rating_medium",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135447",
                              menuFilterIds: ["VEG"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "4500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185181",
                              name: "Lemon Tea",
                              category: "Beverages",
                              description:
                                "Indulge in a refreshing citrus-infused, aromatic beverage for a revitalizing and delightful experience.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/16/ff7fda3c-17dc-47c5-95c6-d8abf6c6ef8f_5818dd06-07b6-49ce-b575-a9b44c5f432a.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 3000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "34 ratings",
                                  ratingCountV2: "34",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "79135461",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "3000",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642308",
                              name: "Tea",
                              category: "Beverages",
                              description:
                                "A refreshing and aromatic beverage that invigorates the senses with its exquisite flavors and warm embrace.",
                              imageId: "37effea7e83d66297ad68625b86d41dd",
                              inStock: 1,
                              isVeg: 1,
                              price: 2500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "190 ratings",
                                  ratingCountV2: "190",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "5096028",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "2500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185183",
                              name: "Black Tea",
                              category: "Beverages",
                              description:
                                "Indulge in the rich, aromatic flavors of this exquisite black tea, a refreshing and satisfying beverage.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2026/1/23/b40f5b66-fdc7-4604-81f7-f9afc3744e86_c5c46703-5921-48ce-8064-56a825408b3a.JPG",
                              inStock: 1,
                              isVeg: 1,
                              price: 2500,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "79135448",
                              menuFilterIds: ["VEG"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "2500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "95642309",
                              name: "Filter Coffee",
                              category: "Beverages",
                              description:
                                "A rich and aromatic traditional beverage that provides the perfect balance of smooth flavors to awaken your senses.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/2/26/46f1fe7d-7e0b-443f-b61a-aeae260a92c6_e881ff52-9f72-4395-879b-cb50271c039b.jpg",
                              isVeg: 1,
                              price: 4500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 7 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "128 ratings",
                                  ratingCountV2: "128",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "53199076",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "4500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image: "37effea7e83d66297ad68625b86d41dd",
                      categoryId: "24376114",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Modak",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "212071655",
                              name: "Ladoo (1Pcs)",
                              category: "Modak",
                              isVeg: 1,
                              price: 9900,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 7 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "17 ratings",
                                  ratingCountV2: "17",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "129918854",
                              menuFilterIds: ["bestseller", "VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "9900",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "209950449",
                              name: "Amba Modak Box (2 Pcs)",
                              category: "Modak",
                              isVeg: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 7 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "15 ratings",
                                  ratingCountV2: "15",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "128958494",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "24900",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "209949506",
                              name: "Amba Modak Box ",
                              category: "Modak",
                              isVeg: 1,
                              price: 2500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 7 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "128958493",
                              menuFilterIds: ["VEG"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_final_price: "0",
                                swiggy_listing_price: "2500",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "79859633",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Paratha",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "135185160",
                              name: "Aloo Paratha",
                              category: "Paratha",
                              description:
                                "A delectable and flavorful stuffed paratha bursting with savory goodness from the land of spices.",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2024/6/16/8665ded0-ed75-4c4c-bb66-868743fc5ff8_29bcbabf-3f86-4e88-8a0f-160a655f58f8.JPG",
                              isVeg: 1,
                              price: 8500,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 7 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "11 ratings",
                                  ratingCountV2: "11",
                                },
                                ratingsPresentationConfig: {
                                  bgGradient: {
                                    colours: ["#C8F9E5", "#00FFFFFF"],
                                    gradientDirection:
                                      "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                  },
                                  ratingIconColor: "rating_very_good",
                                  ratingTextColor: "rating_very_good",
                                  ratingCountTextColor: "rating_very_good",
                                  ratingFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  ratingCountFontName:
                                    "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                },
                              },
                              parentId: "5095679",
                              menuFilterIds: ["VEG", "toprated"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "8500",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      image:
                        "FOOD_CATALOG/IMAGES/CMS/2024/6/16/8665ded0-ed75-4c4c-bb66-868743fc5ff8_29bcbabf-3f86-4e88-8a0f-160a655f58f8.JPG",
                      categoryId: "45992258",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Amba Modak Box",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "210005807",
                              name: "Amba Modak Box (2Pc)",
                              category: "Amba Modak Box",
                              description: "Amba Modak Box (2Pc)",
                              isVeg: 1,
                              price: 24900,
                              variants: {},
                              variantsV2: {},
                              nextAvailableAtMessage:
                                "Next available at 7 am, tomorrow",
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {},
                              },
                              parentId: "128986974",
                              menuFilterIds: ["VEG"],
                              priceComparisonComms: {},
                              instrumentationMetaMap: {
                                swiggy_listing_price: "24900",
                                swiggy_final_price: "0",
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      subtitleSuffix: {},
                      categoryId: "79886377",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                      header: {
                        title: "Related to Udupi Bhavan",
                        headerStyling: {
                          padding: {
                            left: 20,
                            top: 24,
                            bottom: 16,
                          },
                          titleSize: 18,
                          subtitleSize: 14,
                          titleColor: "#3e4152",
                          titleFontName: "FONT_NAME_ALL_CAPS_AC1",
                        },
                      },
                      layout: {
                        rows: 1,
                        columns: 6,
                        horizontalScrollEnabled: true,
                        widgetPadding: {},
                        containerStyle: {
                          containerPadding: {
                            left: 8,
                            right: 12,
                            bottom: 16,
                          },
                        },
                        scrollBar: {
                          scrollThumbColor: "#E46D47",
                          scrollTrackColor: "#E4E4E4",
                          width: 54,
                          height: 4,
                          scrollStyling: {
                            padding: {
                              top: 6,
                              bottom: 24,
                            },
                          },
                        },
                        backgroundColor: "#F1F8FF",
                        widgetBorderStyle: {
                          top: {
                            color: "#E7F4FD",
                            height: 1,
                          },
                          bottom: {
                            color: "#E7F4FD",
                            height: 1,
                          },
                          left: {},
                          right: {},
                        },
                        widgetTheme: {
                          defaultMode: {
                            backgroundColour: "#F0F0F5",
                            theme: "THEME_TYPE_LIGHT",
                            themeVariant: "THEME_VARIANT_DEFAULT",
                          },
                          darkMode: {
                            backgroundColour: "#1B3028",
                            theme: "THEME_TYPE_DARK",
                            themeVariant: "THEME_VARIANT_DEFAULT",
                          },
                        },
                      },
                      id: "adsOnlyMenuSimilarRestaurantWidgetUX4Test",
                      gridElements: {
                        infoWithStyle: {
                          "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.SimilarRestaurantsInfoWithStyle",
                          restaurants: [
                            {
                              info: {
                                id: "1133606",
                                name: "Someshwaram",
                                slugs: {
                                  city: "Pune",
                                },
                                cloudinaryImageId:
                                  "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/28/71e89c88-f7f3-4867-aea5-a9c3ec5319ff_1133606.jpg",
                                locality: "Narhe",
                                areaName: "Narhe",
                                costForTwo: "₹300 for two",
                                cuisines: ["South Indian"],
                                avgRating: 4.3,
                                veg: true,
                                parentId: "653058",
                                avgRatingString: "4.3",
                                totalRatingsString: "466",
                                adTrackingId:
                                  "cid=bdfc4c51-bc8c-4e6e-98a4-90de504b100c~p=0~adgrpid=bdfc4c51-bc8c-4e6e-98a4-90de504b100c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1133606~plpr=HOME#SIMILAR_ENTITY~eid=e338187f-f5bd-4205-9c88-27ecc15b3ab9~srvts=1793240320223~arid=571805",
                                sla: {
                                  deliveryTime: 116,
                                  lastMileTravel: 8.4,
                                  serviceability: "SERVICEABLE",
                                  slaString: "110-120 mins",
                                  lastMileTravelString: "8.4 km",
                                  iconType: "ICON_TYPE_EMPTY",
                                },
                                availability: {
                                  nextCloseTime: "2026-10-29 23:30:00",
                                  opened: true,
                                },
                                badges: {},
                                isOpen: true,
                                aggregatedDiscountInfoV2: {},
                                badgesV2: {
                                  entityBadges: {
                                    textBased: {},
                                    imageBased: {},
                                    textExtendedBadges: {},
                                  },
                                },
                                cta: {
                                  link: "https://www.swiggy.com/city/pune/someshwaram-narhe-rest1133606",
                                  text: "RESTAURANT_MENU",
                                  type: "DEEPLINK",
                                },
                                differentiatedUi: {
                                  displayType:
                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                  differentiatedUiMediaDetails: {
                                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                                  },
                                },
                                reviewsSummary: {},
                                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                restaurantOfferPresentationInfo: {},
                                externalRatings: {
                                  aggregatedRating: {
                                    rating: "--",
                                  },
                                },
                                ratingsDisplayPreference:
                                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                campaignId:
                                  "bdfc4c51-bc8c-4e6e-98a4-90de504b100c",
                                priceComparisonComms: {},
                              },
                              analytics: {
                                screenName: "ux4-home-page",
                                context:
                                  '{"adTrackingId":"cid=bdfc4c51-bc8c-4e6e-98a4-90de504b100c~p=0~adgrpid=bdfc4c51-bc8c-4e6e-98a4-90de504b100c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1133606~plpr=HOME#SIMILAR_ENTITY~eid=e338187f-f5bd-4205-9c88-27ecc15b3ab9~srvts=1793240320223~arid=571805~wn=adsOnlyMenuSimilarRestaurantWidget","tid":"eyJLSUQiOiIyIiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3OTMyNDM4ODgsImlhdCI6MTc5MzI0MDI4OCwic2Vzc2lvbl9kYXRhIjoiNFF2d0pnNkplZ21qT0hpRXBjVUtJRSt3Q2JlU0hEVTRIeTFPcXdaZURsM0VGWHlWUDhOT1lVZEw2STQyLzZRTDFqQ25TQXJybHVFR3VhYXZvT0J6Tk40eEd6cnlrWWt4WHJFVDR5QTFwbjgxOUxtVkxXMWFOVHRvRFcra3ByRjFuSll0K2dsdnZFSDhUQ3FGRE9QNmg3WmQzK0FGYkNIR2kvdTZwbGpReTBBaVVtUVl5YVU0MWxubytIRldCeHdmaEtaN3NrdUlraDY3MEtUTjlOV1gxQT09Iiwic2lkIjoidWc3NTNiM2RhMWEtMWY4Ny00MjNkLTgxODctODZjMTdjMTM0Iiwic3ViIjoiMTVmZjFjMWYtYmQ0NC00MzNjLTljOWUtMGYxYTY2OTg4YmFjIiwidXNlcl9pZCI6IjAifQ.kd1zDnAEHAcCODZPrKFh4rY-3hmPjJQY-ZYCgmzdnbQ"}',
                                objectValue: "1133606",
                                impressionObjectName:
                                  "impression-similar-restaurant-item-ad",
                                clickObjectName:
                                  "click-similar-restaurant-item-ad",
                              },
                              cta: {
                                link: "https://www.swiggy.com/city/pune/someshwaram-narhe-rest1133606",
                                text: "RESTAURANT_MENU",
                                type: "DEEPLINK",
                              },
                            },
                            {
                              info: {
                                id: "147547",
                                name: "Yenna Dosa",
                                slugs: {
                                  city: "Pune",
                                },
                                cloudinaryImageId: "fyg9qf4t8vuzpa5fvyn8",
                                locality: "Bibwewadi",
                                areaName: "Bibwewadi",
                                costForTwo: "₹300 for two",
                                cuisines: ["South Indian"],
                                avgRating: 4.6,
                                veg: true,
                                parentId: "227837",
                                avgRatingString: "4.6",
                                totalRatingsString: "10K+",
                                adTrackingId:
                                  "cid=965ed51c-1e1d-410e-8036-d8b2848c1b12~p=1~adgrpid=965ed51c-1e1d-410e-8036-d8b2848c1b12#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=147547~plpr=HOME#SIMILAR_ENTITY~eid=9cd74389-0217-4fcf-ba5e-27975db03d63~srvts=1793240320223~arid=571805",
                                sla: {
                                  deliveryTime: 32,
                                  lastMileTravel: 5.8,
                                  serviceability: "SERVICEABLE",
                                  slaString: "25-30 mins",
                                  lastMileTravelString: "5.8 km",
                                  iconType: "ICON_TYPE_EMPTY",
                                },
                                availability: {
                                  nextCloseTime: "2026-10-29 22:00:00",
                                  opened: true,
                                },
                                badges: {
                                  imageBadges: [
                                    {
                                      imageId:
                                        "v1695133679/badges/Pure_Veg111.png",
                                      description:
                                        "Serves only 100% vegetarian food, with no non-veg items.",
                                    },
                                  ],
                                },
                                isOpen: true,
                                aggregatedDiscountInfoV2: {},
                                badgesV2: {
                                  entityBadges: {
                                    textBased: {},
                                    imageBased: {
                                      badgeObject: [
                                        {
                                          attributes: {
                                            theme: "",
                                            imageId:
                                              "v1695133679/badges/Pure_Veg111.png",
                                            description:
                                              "Serves only 100% vegetarian food, with no non-veg items.",
                                          },
                                        },
                                      ],
                                    },
                                    textExtendedBadges: {},
                                  },
                                },
                                cta: {
                                  link: "https://www.swiggy.com/city/pune/yenna-dosa-bibwewadi-rest147547",
                                  text: "RESTAURANT_MENU",
                                  type: "DEEPLINK",
                                },
                                differentiatedUi: {
                                  displayType:
                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                  differentiatedUiMediaDetails: {
                                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                                  },
                                },
                                reviewsSummary: {},
                                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                restaurantOfferPresentationInfo: {},
                                externalRatings: {
                                  aggregatedRating: {
                                    rating: "4.2",
                                    ratingCount: "3.5K+",
                                  },
                                  source: "GOOGLE",
                                  sourceIconImageId:
                                    "v1704440323/google_ratings/rating_google_tag",
                                },
                                ratingsDisplayPreference:
                                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                campaignId:
                                  "965ed51c-1e1d-410e-8036-d8b2848c1b12",
                                priceComparisonComms: {},
                              },
                              analytics: {
                                screenName: "ux4-home-page",
                                context:
                                  '{"adTrackingId":"cid=965ed51c-1e1d-410e-8036-d8b2848c1b12~p=1~adgrpid=965ed51c-1e1d-410e-8036-d8b2848c1b12#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=147547~plpr=HOME#SIMILAR_ENTITY~eid=9cd74389-0217-4fcf-ba5e-27975db03d63~srvts=1793240320223~arid=571805~wn=adsOnlyMenuSimilarRestaurantWidget","tid":"eyJLSUQiOiIyIiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3OTMyNDM4ODgsImlhdCI6MTc5MzI0MDI4OCwic2Vzc2lvbl9kYXRhIjoiNFF2d0pnNkplZ21qT0hpRXBjVUtJRSt3Q2JlU0hEVTRIeTFPcXdaZURsM0VGWHlWUDhOT1lVZEw2STQyLzZRTDFqQ25TQXJybHVFR3VhYXZvT0J6Tk40eEd6cnlrWWt4WHJFVDR5QTFwbjgxOUxtVkxXMWFOVHRvRFcra3ByRjFuSll0K2dsdnZFSDhUQ3FGRE9QNmg3WmQzK0FGYkNIR2kvdTZwbGpReTBBaVVtUVl5YVU0MWxubytIRldCeHdmaEtaN3NrdUlraDY3MEtUTjlOV1gxQT09Iiwic2lkIjoidWc3NTNiM2RhMWEtMWY4Ny00MjNkLTgxODctODZjMTdjMTM0Iiwic3ViIjoiMTVmZjFjMWYtYmQ0NC00MzNjLTljOWUtMGYxYTY2OTg4YmFjIiwidXNlcl9pZCI6IjAifQ.kd1zDnAEHAcCODZPrKFh4rY-3hmPjJQY-ZYCgmzdnbQ"}',
                                objectValue: "147547",
                                impressionObjectName:
                                  "impression-similar-restaurant-item-ad",
                                clickObjectName:
                                  "click-similar-restaurant-item-ad",
                              },
                              cta: {
                                link: "https://www.swiggy.com/city/pune/yenna-dosa-bibwewadi-rest147547",
                                text: "RESTAURANT_MENU",
                                type: "DEEPLINK",
                              },
                            },
                            {
                              info: {
                                id: "1465597",
                                name: "Hotel Gurudatta Fast Food And Snacks Centre",
                                slugs: {
                                  city: "Pune",
                                },
                                cloudinaryImageId:
                                  "RX_THUMBNAIL/IMAGES/VENDOR/2026/10/8/24b8c084-561c-4827-aee6-349efeb22caf_1465597.jpg",
                                locality: "Kothrud",
                                areaName: "Kothrud",
                                costForTwo: "₹200 for two",
                                cuisines: [
                                  "Indian",
                                  "Snacks",
                                  "Fast Food",
                                  "South Indian",
                                  "Kerala",
                                ],
                                veg: true,
                                parentId: "827914",
                                avgRatingString: "NEW",
                                adTrackingId:
                                  "cid=442136e6-0e5e-416d-9a4e-ec28ad964f63~p=2~adgrpid=442136e6-0e5e-416d-9a4e-ec28ad964f63#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1465597~plpr=HOME#SIMILAR_ENTITY~eid=37ccb7a3-0f10-4783-a083-164b6d9327da~srvts=1793240320223~arid=571805",
                                sla: {
                                  deliveryTime: 31,
                                  lastMileTravel: 6.5,
                                  serviceability: "SERVICEABLE",
                                  slaString: "25-30 mins",
                                  lastMileTravelString: "6.5 km",
                                  iconType: "ICON_TYPE_EMPTY",
                                },
                                availability: {
                                  nextCloseTime: "2026-10-29 23:00:00",
                                  opened: true,
                                },
                                badges: {},
                                isOpen: true,
                                aggregatedDiscountInfoV2: {},
                                badgesV2: {
                                  entityBadges: {
                                    imageBased: {},
                                    textExtendedBadges: {},
                                    textBased: {},
                                  },
                                },
                                cta: {
                                  link: "https://www.swiggy.com/city/pune/hotel-gurudatta-fast-food-and-snacks-centre-kothrud-rest1465597",
                                  text: "RESTAURANT_MENU",
                                  type: "DEEPLINK",
                                },
                                differentiatedUi: {
                                  displayType:
                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                  differentiatedUiMediaDetails: {
                                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                                  },
                                },
                                reviewsSummary: {},
                                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                isNewlyOnboarded: true,
                                restaurantOfferPresentationInfo: {},
                                externalRatings: {
                                  aggregatedRating: {
                                    rating: "--",
                                  },
                                },
                                ratingsDisplayPreference:
                                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                campaignId:
                                  "442136e6-0e5e-416d-9a4e-ec28ad964f63",
                                priceComparisonComms: {},
                              },
                              analytics: {
                                screenName: "ux4-home-page",
                                context:
                                  '{"adTrackingId":"cid=442136e6-0e5e-416d-9a4e-ec28ad964f63~p=2~adgrpid=442136e6-0e5e-416d-9a4e-ec28ad964f63#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1465597~plpr=HOME#SIMILAR_ENTITY~eid=37ccb7a3-0f10-4783-a083-164b6d9327da~srvts=1793240320223~arid=571805~wn=adsOnlyMenuSimilarRestaurantWidget","tid":"eyJLSUQiOiIyIiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3OTMyNDM4ODgsImlhdCI6MTc5MzI0MDI4OCwic2Vzc2lvbl9kYXRhIjoiNFF2d0pnNkplZ21qT0hpRXBjVUtJRSt3Q2JlU0hEVTRIeTFPcXdaZURsM0VGWHlWUDhOT1lVZEw2STQyLzZRTDFqQ25TQXJybHVFR3VhYXZvT0J6Tk40eEd6cnlrWWt4WHJFVDR5QTFwbjgxOUxtVkxXMWFOVHRvRFcra3ByRjFuSll0K2dsdnZFSDhUQ3FGRE9QNmg3WmQzK0FGYkNIR2kvdTZwbGpReTBBaVVtUVl5YVU0MWxubytIRldCeHdmaEtaN3NrdUlraDY3MEtUTjlOV1gxQT09Iiwic2lkIjoidWc3NTNiM2RhMWEtMWY4Ny00MjNkLTgxODctODZjMTdjMTM0Iiwic3ViIjoiMTVmZjFjMWYtYmQ0NC00MzNjLTljOWUtMGYxYTY2OTg4YmFjIiwidXNlcl9pZCI6IjAifQ.kd1zDnAEHAcCODZPrKFh4rY-3hmPjJQY-ZYCgmzdnbQ"}',
                                objectValue: "1465597",
                                impressionObjectName:
                                  "impression-similar-restaurant-item-ad",
                                clickObjectName:
                                  "click-similar-restaurant-item-ad",
                              },
                              cta: {
                                link: "https://www.swiggy.com/city/pune/hotel-gurudatta-fast-food-and-snacks-centre-kothrud-rest1465597",
                                text: "RESTAURANT_MENU",
                                type: "DEEPLINK",
                              },
                            },
                            {
                              info: {
                                id: "375901",
                                name: "Shripad Idli center",
                                slugs: {
                                  city: "Pune",
                                },
                                cloudinaryImageId: "z0swwqykaia4kpgqdmvw",
                                locality: "Kasba Peth",
                                areaName: "Swargate",
                                costForTwo: "₹100 for two",
                                cuisines: ["South Indian"],
                                avgRating: 3.8,
                                veg: true,
                                parentId: "187231",
                                avgRatingString: "3.8",
                                totalRatingsString: "58",
                                adTrackingId:
                                  "cid=5eee268b-69cc-4262-9e0a-559ed5a46ac9~p=3~adgrpid=5eee268b-69cc-4262-9e0a-559ed5a46ac9#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=375901~plpr=HOME#SIMILAR_ENTITY~eid=5bdb5a8f-fccd-4142-8111-3faf6b84f1fd~srvts=1793240320223~arid=571805",
                                sla: {
                                  deliveryTime: 29,
                                  lastMileTravel: 1.3,
                                  serviceability: "SERVICEABLE",
                                  slaString: "25-30 mins",
                                  lastMileTravelString: "1.3 km",
                                  iconType: "ICON_TYPE_EMPTY",
                                },
                                availability: {
                                  nextCloseTime: "2026-10-29 18:15:00",
                                  opened: true,
                                },
                                badges: {},
                                isOpen: true,
                                aggregatedDiscountInfoV2: {},
                                badgesV2: {
                                  entityBadges: {
                                    textBased: {},
                                    imageBased: {},
                                    textExtendedBadges: {},
                                  },
                                },
                                cta: {
                                  link: "https://www.swiggy.com/city/pune/shripad-idli-center-kasba-peth-swargate-rest375901",
                                  text: "RESTAURANT_MENU",
                                  type: "DEEPLINK",
                                },
                                differentiatedUi: {
                                  displayType:
                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                  differentiatedUiMediaDetails: {
                                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                                  },
                                },
                                reviewsSummary: {},
                                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                restaurantOfferPresentationInfo: {},
                                externalRatings: {
                                  aggregatedRating: {
                                    rating: "--",
                                  },
                                },
                                ratingsDisplayPreference:
                                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                campaignId:
                                  "5eee268b-69cc-4262-9e0a-559ed5a46ac9",
                                priceComparisonComms: {},
                              },
                              analytics: {
                                screenName: "ux4-home-page",
                                context:
                                  '{"adTrackingId":"cid=5eee268b-69cc-4262-9e0a-559ed5a46ac9~p=3~adgrpid=5eee268b-69cc-4262-9e0a-559ed5a46ac9#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=375901~plpr=HOME#SIMILAR_ENTITY~eid=5bdb5a8f-fccd-4142-8111-3faf6b84f1fd~srvts=1793240320223~arid=571805~wn=adsOnlyMenuSimilarRestaurantWidget","tid":"eyJLSUQiOiIyIiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3OTMyNDM4ODgsImlhdCI6MTc5MzI0MDI4OCwic2Vzc2lvbl9kYXRhIjoiNFF2d0pnNkplZ21qT0hpRXBjVUtJRSt3Q2JlU0hEVTRIeTFPcXdaZURsM0VGWHlWUDhOT1lVZEw2STQyLzZRTDFqQ25TQXJybHVFR3VhYXZvT0J6Tk40eEd6cnlrWWt4WHJFVDR5QTFwbjgxOUxtVkxXMWFOVHRvRFcra3ByRjFuSll0K2dsdnZFSDhUQ3FGRE9QNmg3WmQzK0FGYkNIR2kvdTZwbGpReTBBaVVtUVl5YVU0MWxubytIRldCeHdmaEtaN3NrdUlraDY3MEtUTjlOV1gxQT09Iiwic2lkIjoidWc3NTNiM2RhMWEtMWY4Ny00MjNkLTgxODctODZjMTdjMTM0Iiwic3ViIjoiMTVmZjFjMWYtYmQ0NC00MzNjLTljOWUtMGYxYTY2OTg4YmFjIiwidXNlcl9pZCI6IjAifQ.kd1zDnAEHAcCODZPrKFh4rY-3hmPjJQY-ZYCgmzdnbQ"}',
                                objectValue: "375901",
                                impressionObjectName:
                                  "impression-similar-restaurant-item-ad",
                                clickObjectName:
                                  "click-similar-restaurant-item-ad",
                              },
                              cta: {
                                link: "https://www.swiggy.com/city/pune/shripad-idli-center-kasba-peth-swargate-rest375901",
                                text: "RESTAURANT_MENU",
                                type: "DEEPLINK",
                              },
                            },
                            {
                              info: {
                                id: "879508",
                                name: "Ishan Pure Veg",
                                slugs: {
                                  city: "Pune",
                                },
                                cloudinaryImageId:
                                  "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/4/ad051941-bab9-4f83-844b-313cd424af5c_879508.jpg",
                                locality: "Sinhagad road",
                                areaName: "Swargate",
                                costForTwo: "₹200 for two",
                                cuisines: [
                                  "North Indian",
                                  "South Indian",
                                  "Punjabi",
                                  "Snacks",
                                  "Beverages",
                                ],
                                avgRating: 4.5,
                                veg: true,
                                parentId: "107404",
                                avgRatingString: "4.5",
                                totalRatingsString: "5.0K+",
                                adTrackingId:
                                  "cid=9a57d0a4-e88e-4d45-9b32-03171ec83d09~p=4~adgrpid=9a57d0a4-e88e-4d45-9b32-03171ec83d09#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=879508~plpr=HOME#SIMILAR_ENTITY~eid=59ab51a9-b542-44a0-a3fa-ef1cfffdf14b~srvts=1793240320223~arid=571805",
                                sla: {
                                  deliveryTime: 29,
                                  lastMileTravel: 3.6,
                                  serviceability: "SERVICEABLE",
                                  slaString: "25-30 mins",
                                  lastMileTravelString: "3.6 km",
                                  iconType: "ICON_TYPE_EMPTY",
                                },
                                availability: {
                                  nextCloseTime: "2026-10-29 23:30:00",
                                  opened: true,
                                },
                                badges: {},
                                isOpen: true,
                                aggregatedDiscountInfoV2: {},
                                badgesV2: {
                                  entityBadges: {
                                    textExtendedBadges: {},
                                    textBased: {},
                                    imageBased: {},
                                  },
                                },
                                cta: {
                                  link: "https://www.swiggy.com/city/pune/ishan-pure-veg-sinhagad-road-swargate-rest879508",
                                  text: "RESTAURANT_MENU",
                                  type: "DEEPLINK",
                                },
                                differentiatedUi: {
                                  displayType:
                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                  differentiatedUiMediaDetails: {
                                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                                  },
                                },
                                reviewsSummary: {},
                                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                restaurantOfferPresentationInfo: {},
                                externalRatings: {
                                  aggregatedRating: {
                                    rating: "--",
                                  },
                                },
                                ratingsDisplayPreference:
                                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                campaignId:
                                  "9a57d0a4-e88e-4d45-9b32-03171ec83d09",
                                priceComparisonComms: {},
                              },
                              analytics: {
                                screenName: "ux4-home-page",
                                context:
                                  '{"adTrackingId":"cid=9a57d0a4-e88e-4d45-9b32-03171ec83d09~p=4~adgrpid=9a57d0a4-e88e-4d45-9b32-03171ec83d09#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=879508~plpr=HOME#SIMILAR_ENTITY~eid=59ab51a9-b542-44a0-a3fa-ef1cfffdf14b~srvts=1793240320223~arid=571805~wn=adsOnlyMenuSimilarRestaurantWidget","tid":"eyJLSUQiOiIyIiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3OTMyNDM4ODgsImlhdCI6MTc5MzI0MDI4OCwic2Vzc2lvbl9kYXRhIjoiNFF2d0pnNkplZ21qT0hpRXBjVUtJRSt3Q2JlU0hEVTRIeTFPcXdaZURsM0VGWHlWUDhOT1lVZEw2STQyLzZRTDFqQ25TQXJybHVFR3VhYXZvT0J6Tk40eEd6cnlrWWt4WHJFVDR5QTFwbjgxOUxtVkxXMWFOVHRvRFcra3ByRjFuSll0K2dsdnZFSDhUQ3FGRE9QNmg3WmQzK0FGYkNIR2kvdTZwbGpReTBBaVVtUVl5YVU0MWxubytIRldCeHdmaEtaN3NrdUlraDY3MEtUTjlOV1gxQT09Iiwic2lkIjoidWc3NTNiM2RhMWEtMWY4Ny00MjNkLTgxODctODZjMTdjMTM0Iiwic3ViIjoiMTVmZjFjMWYtYmQ0NC00MzNjLTljOWUtMGYxYTY2OTg4YmFjIiwidXNlcl9pZCI6IjAifQ.kd1zDnAEHAcCODZPrKFh4rY-3hmPjJQY-ZYCgmzdnbQ"}',
                                objectValue: "879508",
                                impressionObjectName:
                                  "impression-similar-restaurant-item-ad",
                                clickObjectName:
                                  "click-similar-restaurant-item-ad",
                              },
                              cta: {
                                link: "https://www.swiggy.com/city/pune/ishan-pure-veg-sinhagad-road-swargate-rest879508",
                                text: "RESTAURANT_MENU",
                                type: "DEEPLINK",
                              },
                            },
                            {
                              info: {
                                id: "1462249",
                                name: "Pune Tiffins",
                                slugs: {
                                  city: "Pune",
                                },
                                cloudinaryImageId:
                                  "RX_THUMBNAIL/IMAGES/VENDOR/2026/10/1/1d3dceb4-5194-4a41-ae02-faf522347af5_1462249.jpg",
                                locality: "Kothrud",
                                areaName: "Kothrud",
                                costForTwo: "₹300 for two",
                                cuisines: [
                                  "Maharashtrian",
                                  "Snacks",
                                  "Fast Food",
                                  "South Indian",
                                  "Indian",
                                ],
                                veg: true,
                                parentId: "826073",
                                avgRatingString: "NEW",
                                adTrackingId:
                                  "cid=4387db70-831a-4c59-b614-13d0223d557e~p=5~adgrpid=4387db70-831a-4c59-b614-13d0223d557e#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1462249~plpr=HOME#SIMILAR_ENTITY~eid=9715b758-5681-432f-81d7-8c07beea6247~srvts=1793240320223~arid=571805",
                                sla: {
                                  deliveryTime: 26,
                                  lastMileTravel: 4.5,
                                  serviceability: "SERVICEABLE",
                                  slaString: "20-25 mins",
                                  lastMileTravelString: "4.5 km",
                                  iconType: "ICON_TYPE_EMPTY",
                                },
                                availability: {
                                  nextCloseTime: "2026-10-29 19:45:00",
                                  opened: true,
                                },
                                badges: {},
                                isOpen: true,
                                aggregatedDiscountInfoV2: {},
                                badgesV2: {
                                  entityBadges: {
                                    textBased: {},
                                    imageBased: {},
                                    textExtendedBadges: {},
                                  },
                                },
                                cta: {
                                  link: "https://www.swiggy.com/city/pune/pune-tiffins-kothrud-rest1462249",
                                  text: "RESTAURANT_MENU",
                                  type: "DEEPLINK",
                                },
                                differentiatedUi: {
                                  displayType:
                                    "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                  differentiatedUiMediaDetails: {
                                    mediaType: "ADS_MEDIA_ENUM_IMAGE",
                                  },
                                },
                                reviewsSummary: {},
                                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                isNewlyOnboarded: true,
                                restaurantOfferPresentationInfo: {},
                                externalRatings: {
                                  aggregatedRating: {
                                    rating: "--",
                                  },
                                },
                                ratingsDisplayPreference:
                                  "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                campaignId:
                                  "4387db70-831a-4c59-b614-13d0223d557e",
                                priceComparisonComms: {},
                              },
                              analytics: {
                                screenName: "ux4-home-page",
                                context:
                                  '{"adTrackingId":"cid=4387db70-831a-4c59-b614-13d0223d557e~p=5~adgrpid=4387db70-831a-4c59-b614-13d0223d557e#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1462249~plpr=HOME#SIMILAR_ENTITY~eid=9715b758-5681-432f-81d7-8c07beea6247~srvts=1793240320223~arid=571805~wn=adsOnlyMenuSimilarRestaurantWidget","tid":"eyJLSUQiOiIyIiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3OTMyNDM4ODgsImlhdCI6MTc5MzI0MDI4OCwic2Vzc2lvbl9kYXRhIjoiNFF2d0pnNkplZ21qT0hpRXBjVUtJRSt3Q2JlU0hEVTRIeTFPcXdaZURsM0VGWHlWUDhOT1lVZEw2STQyLzZRTDFqQ25TQXJybHVFR3VhYXZvT0J6Tk40eEd6cnlrWWt4WHJFVDR5QTFwbjgxOUxtVkxXMWFOVHRvRFcra3ByRjFuSll0K2dsdnZFSDhUQ3FGRE9QNmg3WmQzK0FGYkNIR2kvdTZwbGpReTBBaVVtUVl5YVU0MWxubytIRldCeHdmaEtaN3NrdUlraDY3MEtUTjlOV1gxQT09Iiwic2lkIjoidWc3NTNiM2RhMWEtMWY4Ny00MjNkLTgxODctODZjMTdjMTM0Iiwic3ViIjoiMTVmZjFjMWYtYmQ0NC00MzNjLTljOWUtMGYxYTY2OTg4YmFjIiwidXNlcl9pZCI6IjAifQ.kd1zDnAEHAcCODZPrKFh4rY-3hmPjJQY-ZYCgmzdnbQ"}',
                                objectValue: "1462249",
                                impressionObjectName:
                                  "impression-similar-restaurant-item-ad",
                                clickObjectName:
                                  "click-similar-restaurant-item-ad",
                              },
                              cta: {
                                link: "https://www.swiggy.com/city/pune/pune-tiffins-kothrud-rest1462249",
                                text: "RESTAURANT_MENU",
                                type: "DEEPLINK",
                              },
                            },
                          ],
                          widgetType: "WIDGET_TYPE_SRW",
                          style: {},
                        },
                      },
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.gandalf.widgets.v2.SeoContent",
                      title: "About Udupi Bhavan",
                      description:
                        "<section><h3>Best-Selling Dishes at Udupi Bhavan</h3><p>Udupi Bhavan is a popular food destination in Kothrud, Pune, known for serving delicious South Indian food. Customers can order from Udupi Bhavan for fresh preparation, satisfying portions, and flavorful dishes.</p><h3>Medu Wada Sambhar</h3><p>Medu Wada Sambhar is one of the popular dishes at Udupi Bhavan. It is prepared with quality ingredients and offers a satisfying taste for customers ordering from Kothrud.</p><h3>Idli Fry</h3><p>Idli Fry is another preferred item from the menu. It is a good choice for customers looking to enjoy tasty South Indian food in Pune.</p><h3>Why Customers Love Ordering from Udupi Bhavan</h3><p>Customers prefer Udupi Bhavan for its tasty food, reliable service, quick preparation, and menu choices. The restaurant serves South Indian dishes along with options such as hot chocolate, making it suitable for different food preferences.</p><h3>Enjoy Food from Udupi Bhavan at Home with Swiggy</h3><p>Swiggy makes it easy to order food from Udupi Bhavan in Pune. Customers can browse the menu, choose their favorite dishes, place an order online, make secure payments, track the order live, and enjoy doorstep delivery from Udupi Bhavan in Kothrud.</p><h3>Discover More Restaurants in Kothrud</h3><p>Kothrud has many restaurants offering different cuisines, snacks, meals, desserts, and beverages. Customers exploring food delivery in Pune can discover more restaurants and order their favorite food online through Swiggy.</p></section>",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.gandalf.widgets.v2.FAQSection",
                      title: "FAQs about Udupi Bhavan",
                      qnas: [
                        {
                          question:
                            "Does Udupi Bhavan deliver food in Pune on Swiggy?",
                          answer:
                            "Yes, Udupi Bhavan delivers food in Pune through Swiggy. Customers can order their favorite dishes online and enjoy doorstep delivery.",
                        },
                        {
                          question: "What is Udupi Bhavan known for?",
                          answer:
                            "Udupi Bhavan is known for its popular South Indian dishes.",
                        },
                        {
                          question:
                            "What are the most popular dishes at Udupi Bhavan?",
                          answer:
                            "Some of the popular dishes at Udupi Bhavan include Medu Wada Sambhar, Idli Fry, Tea, and Amba Modak Box (2 Pcs).",
                        },
                        {
                          question:
                            "Does Udupi Bhavan offer vegetarian options?",
                          answer:
                            "Yes, Udupi Bhavan offers veg options, including 66 vegetarian items.",
                        },
                        {
                          question: "How can I order from Udupi Bhavan online?",
                          answer:
                            "Customers can open the Swiggy app or website, search for Udupi Bhavan in Pune, browse the menu, add dishes to the cart, and place the order online.",
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 11522036000711"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "Udupi Bhavan",
                      area: "Kothrud",
                      completeAddress:
                        "SR NO 129,130,131A,131B,PLOT NO 90, SHOP  NO 1 UPPER GROUND FLOOR, SANSKRUTI  PRATIBIMB, MAYUR COLONY, KOTHRUD, Karve  Road, Pune, Maharashtra-411038",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.gandalf.widgets.v2.PopularSearches",
                      title: "Popular Searches",
                      interlinkingSeoInfo: [
                        {
                          title: "Popular Restaurant Near Kothrud",
                          links: [
                            {
                              label: "Feast Frankie",
                              url: "https://www.swiggy.com/city/pune/feast-frankie-kothrud-rest963681",
                            },
                            {
                              label: "McDonald's",
                              url: "https://www.swiggy.com/city/pune/mcdonalds-kothrud-rest506982",
                            },
                            {
                              label: "Premachi Biryani",
                              url: "https://www.swiggy.com/city/pune/premachi-biryani-kothrud-rest1245427",
                            },
                            {
                              label: "Gokul Pure Veg",
                              url: "https://www.swiggy.com/city/pune/gokul-pure-veg-kothrud-rest1036666",
                            },
                            {
                              label: "SP's Biryani House",
                              url: "https://www.swiggy.com/city/pune/sps-biryani-house-kothrud-rest20058",
                            },
                            {
                              label: "Pizza Hut",
                              url: "https://www.swiggy.com/city/pune/pizza-hut-kothrud-rest625226",
                            },
                            {
                              label: "Aamhi Pohekar",
                              url: "https://www.swiggy.com/city/pune/aamhi-pohekar-kothrud-rest147865",
                            },
                            {
                              label: "PK Biryani House",
                              url: "https://www.swiggy.com/city/pune/pk-biryani-house-kothrud-rest142657",
                            },
                            {
                              label: "Dabba & Co.",
                              url: "https://www.swiggy.com/city/pune/dabba-and-co--kothrud-rest1054074",
                            },
                            {
                              label: "Chitale IceCream",
                              url: "https://www.swiggy.com/city/pune/chitale-icecream-kothrud-rest399108",
                            },
                            {
                              label: "Breaking Bread Pune - Mehta Foods",
                              url: "https://www.swiggy.com/city/pune/breaking-bread-pune-mehta-foods-kothrud-rest398015",
                            },
                            {
                              label: "Domino's Pizza",
                              url: "https://www.swiggy.com/city/pune/dominos-pizza-kothrud-rest24437",
                            },
                            {
                              label: "Faasos - Wraps, Rolls & Shawarma",
                              url: "https://www.swiggy.com/city/pune/faasos-wraps-rolls-and-shawarma-kothrud-rest18808",
                            },
                            {
                              label: "The Momo Panda",
                              url: "https://www.swiggy.com/city/pune/the-momo-panda-kothrud-rest716996",
                            },
                            {
                              label: "Chinese Wok",
                              url: "https://www.swiggy.com/city/pune/chinese-wok-kothrud-rest323532",
                            },
                            {
                              label: "Rice Kitchen",
                              url: "https://www.swiggy.com/city/pune/rice-kitchen-kothrud-rest709609",
                            },
                            {
                              label: "Samudra Veg (Saras Baug)",
                              url: "https://www.swiggy.com/city/pune/samudra-veg-saras-baug--kothrud-rest768373",
                            },
                            {
                              label: "Thalaiva Biryani",
                              url: "https://www.swiggy.com/city/pune/thalaiva-biryani-kothrud-rest1030769",
                            },
                            {
                              label: "McDonald's",
                              url: "https://www.swiggy.com/city/pune/mcdonalds-kothrud-rest177988",
                            },
                            {
                              label: "Chitale Bandhu",
                              url: "https://www.swiggy.com/city/pune/chitale-bandhu-kothrud-rest153608",
                            },
                            {
                              label: "Sudamache Pohe",
                              url: "https://www.swiggy.com/city/pune/sudamache-pohe-kothrud-rest831140",
                            },
                            {
                              label: "Jayashree Garden",
                              url: "https://www.swiggy.com/city/pune/jayashree-garden-kothrud-rest21560",
                            },
                            {
                              label: "Panchami Pure Veg",
                              url: "https://www.swiggy.com/city/pune/panchami-pure-veg-kothrud-rest88323",
                            },
                            {
                              label: "KFC",
                              url: "https://www.swiggy.com/city/pune/kfc-kothrud-rest16063",
                            },
                            {
                              label: "My Chinese Corner",
                              url: "https://www.swiggy.com/city/pune/my-chinese-corner-kothrud-rest1286415",
                            },
                            {
                              label: "LunchBox - Meals and Thalis",
                              url: "https://www.swiggy.com/city/pune/lunchbox-meals-and-thalis-kothrud-rest62934",
                            },
                            {
                              label: "Nanumal Bhojraj",
                              url: "https://www.swiggy.com/city/pune/nanumal-bhojraj-kothrud-rest208223",
                            },
                            {
                              label: "CAD (M) CAD (B)",
                              url: "https://www.swiggy.com/city/pune/cad-m-cad-b--kothrud-rest20338",
                            },
                            {
                              label: "Shahji's Parantha House",
                              url: "https://www.swiggy.com/city/pune/shahjis-parantha-house-kothrud-rest14881",
                            },
                            {
                              label: "The Good Bowl",
                              url: "https://www.swiggy.com/city/pune/the-good-bowl-kothrud-rest155434",
                            },
                            {
                              label: "Oven Story Pizza",
                              url: "https://www.swiggy.com/city/pune/oven-story-pizza-kothrud-rest25396",
                            },
                            {
                              label: "Mad Over Donuts",
                              url: "https://www.swiggy.com/city/pune/mad-over-donuts-kothrud-rest8525",
                            },
                            {
                              label: "Wadeshwar",
                              url: "https://www.swiggy.com/city/pune/wadeshwar-kothrud-rest70614",
                            },
                            {
                              label: " Poona Guest House",
                              url: "https://www.swiggy.com/city/pune/-poona-guest-house-kothrud-rest380437",
                            },
                            {
                              label: "Vateshwar Bhuvan",
                              url: "https://www.swiggy.com/city/pune/vateshwar-bhuvan-kothrud-rest57626",
                            },
                            {
                              label: "Yumma Swami",
                              url: "https://www.swiggy.com/city/pune/yumma-swami-kothrud-rest397640",
                            },
                            {
                              label: "Big Bowl",
                              url: "https://www.swiggy.com/city/pune/big-bowl-kothrud-rest348887",
                            },
                            {
                              label: "The Biryani Life",
                              url: "https://www.swiggy.com/city/pune/the-biryani-life-kothrud-rest191275",
                            },
                            {
                              label: "The Pizza Project by Oven Story",
                              url: "https://www.swiggy.com/city/pune/the-pizza-project-by-oven-story-kothrud-rest837804",
                            },
                            {
                              label: "BOX8 - Desi Meals",
                              url: "https://www.swiggy.com/city/pune/box8-desi-meals-kothrud-rest987330",
                            },
                            {
                              label:
                                "WeFit - Protein Bowls, Salads & Sandwiches",
                              url: "https://www.swiggy.com/city/pune/wefit-protein-bowls-salads-and-sandwiches-kothrud-rest987336",
                            },
                            {
                              label: "La Cherie Cheesecake",
                              url: "https://www.swiggy.com/city/pune/la-cherie-cheesecake-kothrud-rest367123",
                            },
                            {
                              label: "Shri Kailash dairy",
                              url: "https://www.swiggy.com/city/pune/shri-kailash-dairy-kothrud-rest87895",
                            },
                            {
                              label: "Pizza Hut",
                              url: "https://www.swiggy.com/city/pune/pizza-hut-kothrud-rest654104",
                            },
                            {
                              label: "Rolls Mania - Rolls, Wraps & More",
                              url: "https://www.swiggy.com/city/pune/rolls-mania-rolls-wraps-and-more-kothrud-rest63524",
                            },
                            {
                              label: "Behrouz Biryani",
                              url: "https://www.swiggy.com/city/pune/behrouz-biryani-kothrud-rest16847",
                            },
                            {
                              label: "Shree Siddhivinayak Vadapav",
                              url: "https://www.swiggy.com/city/pune/shree-siddhivinayak-vadapav-kothrud-rest1184784",
                            },
                            {
                              label: "Saparito Pizza",
                              url: "https://www.swiggy.com/city/pune/saparito-pizza-kothrud-rest496959",
                            },
                            {
                              label: "Domino's Pizza",
                              url: "https://www.swiggy.com/city/pune/dominos-pizza-kothrud-rest24424",
                            },
                            {
                              label: "Fish Curry Rice",
                              url: "https://www.swiggy.com/city/pune/fish-curry-rice-kothrud-rest362543",
                            },
                          ],
                        },
                        {
                          title: "Popular Restaurant In Pune",
                          links: [
                            {
                              label: "Burger King",
                              url: "https://www.swiggy.com/city/pune/burger-king-suratwala-rest441447",
                            },
                            {
                              label: "Aroma's Hyderabad House",
                              url: "https://www.swiggy.com/city/pune/aromas-hyderabad-house-phoenix-market-city-rest117540",
                            },
                            {
                              label: "The Rameshwaram Cafe",
                              url: "https://www.swiggy.com/city/pune/the-rameshwaram-cafe-pune-rest1375091",
                            },
                            {
                              label: "Brahma Garden",
                              url: "https://www.swiggy.com/city/pune/brahma-garden-sinhagad-road-rest21395",
                            },
                            {
                              label: "Hotel Vijay - The Taste Of Tamil Nadu",
                              url: "https://www.swiggy.com/city/pune/hotel-vijay-the-taste-of-tamil-nadu-hinjewadi-rest71607",
                            },
                            {
                              label: "Radha Krishna Pure Veg(Hinjewadi)",
                              url: "https://www.swiggy.com/city/pune/radha-krishna-pure-veg-hinjewadi--hinjewadi-rest19902",
                            },
                            {
                              label: "Te Amo",
                              url: "https://www.swiggy.com/city/pune/te-amo-chandan-nagar-rest72762",
                            },
                            {
                              label: "Gokhales Kitchen",
                              url: "https://www.swiggy.com/city/pune/gokhales-kitchen-erandwane-rest438162",
                            },
                            {
                              label: "Kalika Dairy & Sweets",
                              url: "https://www.swiggy.com/city/pune/kalika-dairy-and-sweets-hadapsar-rest180419",
                            },
                            {
                              label: "Chang's",
                              url: "https://www.swiggy.com/city/pune/changs-viman-nagar-rest15091",
                            },
                            {
                              label: "Goku Momos",
                              url: "https://www.swiggy.com/city/pune/goku-momos-hinjewadi-rest691936",
                            },
                            {
                              label: "McDonald's",
                              url: "https://www.swiggy.com/city/pune/mcdonalds-marunji-road-rest23716",
                            },
                            {
                              label: "Relax Pure Veg",
                              url: "https://www.swiggy.com/city/pune/relax-pure-veg-sahakar-nagar-rest40165",
                            },
                            {
                              label: "Taste Of Indore Fun Food Since 2016",
                              url: "https://www.swiggy.com/city/pune/taste-of-indore-fun-food-since-2016-wakad-rest211120",
                            },
                            {
                              label: "Homely Meals @69",
                              url: "https://www.swiggy.com/city/pune/homely-meals-69-1st-phase-rest223630",
                            },
                            {
                              label: "The Verandah",
                              url: "https://www.swiggy.com/city/pune/the-verandah-erandwane-rest512454",
                            },
                            {
                              label: "Kimling",
                              url: "https://www.swiggy.com/city/pune/kimling-nagras-road-rest9969",
                            },
                            {
                              label: "Apna Punjab",
                              url: "https://www.swiggy.com/city/pune/apna-punjab-amanora-town-rest11181",
                            },
                            {
                              label: "Kalyan Bhel",
                              url: "https://www.swiggy.com/city/pune/kalyan-bhel-katraj-rest24127",
                            },
                            {
                              label: "Shri Swami Samartha Pure Veg",
                              url: "https://www.swiggy.com/city/pune/shri-swami-samartha-pure-veg-kothrud-rest101442",
                            },
                            {
                              label: "Shreeji Pure Veg",
                              url: "https://www.swiggy.com/city/pune/shreeji-pure-veg-katraj-rest55048",
                            },
                            {
                              label: "Irani Cafe",
                              url: "https://www.swiggy.com/city/pune/irani-cafe-laxman-nagar-rest202642",
                            },
                            {
                              label: "Kimling Rush",
                              url: "https://www.swiggy.com/city/pune/kimling-rush-pimple-saudagar-rest9874",
                            },
                            {
                              label: "Theobroma",
                              url: "https://www.swiggy.com/city/pune/theobroma-baner-rest238146",
                            },
                            {
                              label: "Ishan Pure Veg",
                              url: "https://www.swiggy.com/city/pune/ishan-pure-veg-shivaji-nagar-rest313969",
                            },
                            {
                              label: "Bikkgane Biryani",
                              url: "https://www.swiggy.com/city/pune/bikkgane-biryani-maan-road-rest428985",
                            },
                            {
                              label: "KFC",
                              url: "https://www.swiggy.com/city/pune/kfc-eon-free-zone-road-rest140832",
                            },
                            {
                              label: "Persian Darbar",
                              url: "https://www.swiggy.com/city/pune/persian-darbar-camp-rest663248",
                            },
                            {
                              label: "Bebe Di Rasoi - Punjabi",
                              url: "https://www.swiggy.com/city/pune/bebe-di-rasoi-punjabi-wakad-rest145719",
                            },
                            {
                              label: "Zeeshan Restaurant Apna Hyderabadi Food",
                              url: "https://www.swiggy.com/city/pune/zeeshan-restaurant-apna-hyderabadi-food-rajiv-gandhi-infotech-park-rest261905",
                            },
                            {
                              label: "Cafe Zam Zam",
                              url: "https://www.swiggy.com/city/pune/cafe-zam-zam-kondhwa-rest16118",
                            },
                            {
                              label: "Bakingo",
                              url: "https://www.swiggy.com/city/pune/bakingo-galande-nagar-rest864947",
                            },
                            {
                              label: "Chulbul Dhaba",
                              url: "https://www.swiggy.com/city/pune/chulbul-dhaba-dhanori-rest80929",
                            },
                            {
                              label: "Haldiram's Restaurant",
                              url: "https://www.swiggy.com/city/pune/haldirams-restaurant-chinchwad-rest325036",
                            },
                            {
                              label: "Pind Punjab",
                              url: "https://www.swiggy.com/city/pune/pind-punjab-eon-it-park-road-rest13184",
                            },
                            {
                              label: "Maiz Mexican Kitchen",
                              url: "https://www.swiggy.com/city/pune/maiz-mexican-kitchen-mahalunge-road-rest1081462",
                            },
                            {
                              label: "Shree Krishna Veg Court",
                              url: "https://www.swiggy.com/city/pune/shree-krishna-veg-court-viman-nagar-rest3163",
                            },
                            {
                              label: "Ghar ka Dabba",
                              url: "https://www.swiggy.com/city/pune/ghar-ka-dabba-kasturi-chowk-rest353836",
                            },
                            {
                              label: "Rolls Mania - Rolls, Wraps & More",
                              url: "https://www.swiggy.com/city/pune/rolls-mania-rolls-wraps-and-more-shivtej-chowk-rest3405",
                            },
                            {
                              label: "Kakke Da Paratha",
                              url: "https://www.swiggy.com/city/pune/kakke-da-paratha-3rd-phase-rest115345",
                            },
                            {
                              label: "Lehza Veg Divine",
                              url: "https://www.swiggy.com/city/pune/lehza-veg-divine-wagholi-rest133111",
                            },
                            {
                              label: "Jyoti Restaurant",
                              url: "https://www.swiggy.com/city/pune/jyoti-restaurant-kondhwa-rest399576",
                            },
                            {
                              label: "Bhadait Misal",
                              url: "https://www.swiggy.com/city/pune/bhadait-misal-prabhat-road-rest55232",
                            },
                            {
                              label: "Abhishek Veg Restaurant",
                              url: "https://www.swiggy.com/city/pune/abhishek-veg-restaurant-erandwane-rest21895",
                            },
                            {
                              label: "Vishwanath Palace",
                              url: "https://www.swiggy.com/city/pune/vishwanath-palace-pashan-rest846892",
                            },
                            {
                              label: "Garva Biryani",
                              url: "https://www.swiggy.com/city/pune/garva-biryani-gurudwara-rd-rest866250",
                            },
                            {
                              label: "Kok Pa Chinese",
                              url: "https://www.swiggy.com/city/pune/kok-pa-chinese-deccan-gymkhana-rest34715",
                            },
                            {
                              label: "Thali Joy",
                              url: "https://www.swiggy.com/city/pune/thali-joy-1st-phase-rest616561",
                            },
                            {
                              label: "Cafe Arabia",
                              url: "https://www.swiggy.com/city/pune/cafe-arabia-namdev-nagar-rest16529",
                            },
                            {
                              label: "Godavari Snacks",
                              url: "https://www.swiggy.com/city/pune/godavari-snacks-magarpatta-city-rest5415",
                            },
                          ],
                        },
                        {
                          title: "City Hub Page",
                          links: [
                            {
                              label: "Bangalore",
                              url: "https://www.swiggy.com/city/bangalore/order-online",
                            },
                            {
                              label: "Hyderabad",
                              url: "https://www.swiggy.com/city/hyderabad/order-online",
                            },
                            {
                              label: "Mumbai",
                              url: "https://www.swiggy.com/city/mumbai/order-online",
                            },
                            {
                              label: "Chennai",
                              url: "https://www.swiggy.com/city/chennai/order-online",
                            },
                            {
                              label: "Delhi",
                              url: "https://www.swiggy.com/city/delhi/order-online",
                            },
                            {
                              label: "Pune",
                              url: "https://www.swiggy.com/city/pune/order-online",
                            },
                            {
                              label: "Kolkata",
                              url: "https://www.swiggy.com/city/kolkata/order-online",
                            },
                            {
                              label: "Gurgaon",
                              url: "https://www.swiggy.com/city/gurgaon/order-online",
                            },
                            {
                              label: "Noida 1",
                              url: "https://www.swiggy.com/city/noida-1/order-online",
                            },
                            {
                              label: "Kochi",
                              url: "https://www.swiggy.com/city/kochi/order-online",
                            },
                            {
                              label: "Ahmedabad",
                              url: "https://www.swiggy.com/city/ahmedabad/order-online",
                            },
                            {
                              label: "Chandigarh",
                              url: "https://www.swiggy.com/city/chandigarh/order-online",
                            },
                            {
                              label: "Coimbatore",
                              url: "https://www.swiggy.com/city/coimbatore/order-online",
                            },
                            {
                              label: "Jaipur",
                              url: "https://www.swiggy.com/city/jaipur/order-online",
                            },
                            {
                              label: "Lucknow",
                              url: "https://www.swiggy.com/city/lucknow/order-online",
                            },
                            {
                              label: "Thiruvananthapuram",
                              url: "https://www.swiggy.com/city/thiruvananthapuram/order-online",
                            },
                            {
                              label: "Vizag",
                              url: "https://www.swiggy.com/city/vizag/order-online",
                            },
                            {
                              label: "Central Goa",
                              url: "https://www.swiggy.com/city/central-goa/order-online",
                            },
                            {
                              label: "Noida",
                              url: "https://www.swiggy.com/city/noida/order-online",
                            },
                            {
                              label: "Surat",
                              url: "https://www.swiggy.com/city/surat/order-online",
                            },
                            {
                              label: "Bhubaneswar",
                              url: "https://www.swiggy.com/city/bhubaneswar/order-online",
                            },
                            {
                              label: "Indore",
                              url: "https://www.swiggy.com/city/indore/order-online",
                            },
                            {
                              label: "Nagpur",
                              url: "https://www.swiggy.com/city/nagpur/order-online",
                            },
                            {
                              label: "Vijayawada",
                              url: "https://www.swiggy.com/city/vijayawada/order-online",
                            },
                            {
                              label: "Patna",
                              url: "https://www.swiggy.com/city/patna/order-online",
                            },
                            {
                              label: "Guwahati",
                              url: "https://www.swiggy.com/city/guwahati/order-online",
                            },
                            {
                              label: "Ludhiana",
                              url: "https://www.swiggy.com/city/ludhiana/order-online",
                            },
                            {
                              label: "Vadodara",
                              url: "https://www.swiggy.com/city/vadodara/order-online",
                            },
                            {
                              label: "Mangaluru",
                              url: "https://www.swiggy.com/city/mangaluru/order-online",
                            },
                            {
                              label: "Mysore",
                              url: "https://www.swiggy.com/city/mysore/order-online",
                            },
                            {
                              label: "Dehradun",
                              url: "https://www.swiggy.com/city/dehradun/order-online",
                            },
                            {
                              label: "Faridabad",
                              url: "https://www.swiggy.com/city/faridabad/order-online",
                            },
                            {
                              label: "Thrissur",
                              url: "https://www.swiggy.com/city/thrissur/order-online",
                            },
                            {
                              label: "Bhopal",
                              url: "https://www.swiggy.com/city/bhopal/order-online",
                            },
                            {
                              label: "Rajkot",
                              url: "https://www.swiggy.com/city/rajkot/order-online",
                            },
                            {
                              label: "Madurai",
                              url: "https://www.swiggy.com/city/madurai/order-online",
                            },
                            {
                              label: "Kanpur",
                              url: "https://www.swiggy.com/city/kanpur/order-online",
                            },
                            {
                              label: "Kozhikode",
                              url: "https://www.swiggy.com/city/kozhikode/order-online",
                            },
                            {
                              label: "Pondicherry",
                              url: "https://www.swiggy.com/city/pondicherry/order-online",
                            },
                            {
                              label: "Varanasi",
                              url: "https://www.swiggy.com/city/varanasi/order-online",
                            },
                            {
                              label: "Nashik",
                              url: "https://www.swiggy.com/city/nashik/order-online",
                            },
                            {
                              label: "Tirupati",
                              url: "https://www.swiggy.com/city/tirupati/order-online",
                            },
                            {
                              label: "Guntur",
                              url: "https://www.swiggy.com/city/guntur/order-online",
                            },
                            {
                              label: "Trichy",
                              url: "https://www.swiggy.com/city/trichy/order-online",
                            },
                            {
                              label: "Kota",
                              url: "https://www.swiggy.com/city/kota/order-online",
                            },
                            {
                              label: "Raipur",
                              url: "https://www.swiggy.com/city/raipur/order-online",
                            },
                            {
                              label: "Kollam",
                              url: "https://www.swiggy.com/city/kollam/order-online",
                            },
                            {
                              label: "Vellore",
                              url: "https://www.swiggy.com/city/vellore/order-online",
                            },
                            {
                              label: "Ranchi",
                              url: "https://www.swiggy.com/city/ranchi/order-online",
                            },
                            {
                              label: "Jalandhar",
                              url: "https://www.swiggy.com/city/jalandhar/order-online",
                            },
                          ],
                        },
                        {
                          title: "Popular Dish Restaurants in Pune",
                          links: [
                            {
                              label: "Burger",
                              url: "https://www.swiggy.com/city/pune/burger-dish-restaurants",
                            },
                            {
                              label: "Biryani",
                              url: "https://www.swiggy.com/city/pune/biryani-dish-restaurants",
                            },
                            {
                              label: "Pizza",
                              url: "https://www.swiggy.com/city/pune/pizza-dish-restaurants",
                            },
                            {
                              label: "Roll",
                              url: "https://www.swiggy.com/city/pune/roll-dish-restaurants",
                            },
                            {
                              label: "Sandwich",
                              url: "https://www.swiggy.com/city/pune/sandwich-dish-restaurants",
                            },
                            {
                              label: "Curry",
                              url: "https://www.swiggy.com/city/pune/curry-dish-restaurants",
                            },
                            {
                              label: "Noodles",
                              url: "https://www.swiggy.com/city/pune/noodles-dish-restaurants",
                            },
                            {
                              label: "Thali",
                              url: "https://www.swiggy.com/city/pune/thali-dish-restaurants",
                            },
                            {
                              label: "Dosa",
                              url: "https://www.swiggy.com/city/pune/dosa-dish-restaurants",
                            },
                            {
                              label: "Momos",
                              url: "https://www.swiggy.com/city/pune/momos-dish-restaurants",
                            },
                            {
                              label: "Idli",
                              url: "https://www.swiggy.com/city/pune/idli-dish-restaurants",
                            },
                            {
                              label: "Other rice varieties",
                              url: "https://www.swiggy.com/city/pune/other-rice-varieties-dish-restaurants",
                            },
                            {
                              label: "Other dry starters",
                              url: "https://www.swiggy.com/city/pune/other-dry-starters-dish-restaurants",
                            },
                            {
                              label: "Khichdi",
                              url: "https://www.swiggy.com/city/pune/khichdi-dish-restaurants",
                            },
                            {
                              label: "Fried rice",
                              url: "https://www.swiggy.com/city/pune/fried-rice-dish-restaurants",
                            },
                            {
                              label: "Paratha",
                              url: "https://www.swiggy.com/city/pune/paratha-dish-restaurants",
                            },
                            {
                              label: "Poha",
                              url: "https://www.swiggy.com/city/pune/poha-dish-restaurants",
                            },
                            {
                              label: "Pav bhaji",
                              url: "https://www.swiggy.com/city/pune/pav-bhaji-dish-restaurants",
                            },
                            {
                              label: "Shawarma",
                              url: "https://www.swiggy.com/city/pune/shawarma-dish-restaurants",
                            },
                            {
                              label: "Vada pav",
                              url: "https://www.swiggy.com/city/pune/vada-pav-dish-restaurants",
                            },
                            {
                              label: "Pasta",
                              url: "https://www.swiggy.com/city/pune/pasta-dish-restaurants",
                            },
                            {
                              label: "Ice cream",
                              url: "https://www.swiggy.com/city/pune/ice-cream-dish-restaurants",
                            },
                            {
                              label: "Pulao",
                              url: "https://www.swiggy.com/city/pune/pulao-dish-restaurants",
                            },
                            {
                              label: "Pav",
                              url: "https://www.swiggy.com/city/pune/pav-dish-restaurants",
                            },
                            {
                              label: "Burrito",
                              url: "https://www.swiggy.com/city/pune/burrito-dish-restaurants",
                            },
                            {
                              label: "Taco",
                              url: "https://www.swiggy.com/city/pune/taco-dish-restaurants",
                            },
                            {
                              label: "Poori (Breakfast)",
                              url: "https://www.swiggy.com/city/pune/poori-breakfast--dish-restaurants",
                            },
                            {
                              label: "Vada",
                              url: "https://www.swiggy.com/city/pune/vada-dish-restaurants",
                            },
                            {
                              label: "Uttapam",
                              url: "https://www.swiggy.com/city/pune/uttapam-dish-restaurants",
                            },
                            {
                              label: "Salad",
                              url: "https://www.swiggy.com/city/pune/salad-dish-restaurants",
                            },
                            {
                              label: "Garlic bread",
                              url: "https://www.swiggy.com/city/pune/garlic-bread-dish-restaurants",
                            },
                            {
                              label: "Bhature",
                              url: "https://www.swiggy.com/city/pune/bhature-dish-restaurants",
                            },
                            {
                              label: "Cake",
                              url: "https://www.swiggy.com/city/pune/cake-dish-restaurants",
                            },
                            {
                              label: "Roti",
                              url: "https://www.swiggy.com/city/pune/roti-dish-restaurants",
                            },
                            {
                              label: "Omelette",
                              url: "https://www.swiggy.com/city/pune/omelette-dish-restaurants",
                            },
                            {
                              label: "Upma",
                              url: "https://www.swiggy.com/city/pune/upma-dish-restaurants",
                            },
                            {
                              label: "Puff",
                              url: "https://www.swiggy.com/city/pune/puff-dish-restaurants",
                            },
                            {
                              label: "Soft drinks",
                              url: "https://www.swiggy.com/city/pune/soft-drinks-dish-restaurants",
                            },
                            {
                              label: "Fries",
                              url: "https://www.swiggy.com/city/pune/fries-dish-restaurants",
                            },
                            {
                              label: "Other chaats",
                              url: "https://www.swiggy.com/city/pune/other-chaats-dish-restaurants",
                            },
                            {
                              label: "Dabeli",
                              url: "https://www.swiggy.com/city/pune/dabeli-dish-restaurants",
                            },
                            {
                              label: "Puri (chaat)",
                              url: "https://www.swiggy.com/city/pune/puri-chaat--dish-restaurants",
                            },
                            {
                              label: "Wings",
                              url: "https://www.swiggy.com/city/pune/wings-dish-restaurants",
                            },
                            {
                              label: "Sweets",
                              url: "https://www.swiggy.com/city/pune/sweets-dish-restaurants",
                            },
                            {
                              label: "Sub",
                              url: "https://www.swiggy.com/city/pune/sub-dish-restaurants",
                            },
                            {
                              label: "Maggi",
                              url: "https://www.swiggy.com/city/pune/maggi-dish-restaurants",
                            },
                            {
                              label: "Tea",
                              url: "https://www.swiggy.com/city/pune/tea-dish-restaurants",
                            },
                            {
                              label: "Kachori",
                              url: "https://www.swiggy.com/city/pune/kachori-dish-restaurants",
                            },
                            {
                              label: "Shake",
                              url: "https://www.swiggy.com/city/pune/shake-dish-restaurants",
                            },
                            {
                              label: "Bhurji",
                              url: "https://www.swiggy.com/city/pune/bhurji-dish-restaurants",
                            },
                          ],
                        },
                        {
                          title: "Top QSR & Chains in Pune",
                          links: [
                            {
                              label: "Annapurna Pure Veg",
                              url: "https://www.swiggy.com/city/pune/annapurna-pure-veg",
                            },
                            {
                              label: "Homely Meals 69",
                              url: "https://www.swiggy.com/city/pune/homely-meals-69",
                            },
                            {
                              label: "Irani Cafe",
                              url: "https://www.swiggy.com/city/pune/irani-cafe",
                            },
                            {
                              label: "Chulbul Dhaba",
                              url: "https://www.swiggy.com/city/pune/chulbul-dhaba",
                            },
                            {
                              label: "Pizza Hut",
                              url: "https://www.swiggy.com/city/pune/pizza-hut",
                            },
                            {
                              label: "Pind Punjab",
                              url: "https://www.swiggy.com/city/pune/pind-punjab",
                            },
                            {
                              label: "Mad Momos",
                              url: "https://www.swiggy.com/city/pune/mad-momos",
                            },
                            {
                              label: "Thali Joy",
                              url: "https://www.swiggy.com/city/pune/thali-joy",
                            },
                            {
                              label: "Cafe Arabia",
                              url: "https://www.swiggy.com/city/pune/cafe-arabia",
                            },
                            {
                              label: "Haldirams Sweets And Namkeen",
                              url: "https://www.swiggy.com/city/pune/haldirams-sweets-and-namkeen",
                            },
                            {
                              label: "Sairat Biryani",
                              url: "https://www.swiggy.com/city/pune/sairat-biryani",
                            },
                            {
                              label: "Global Punjab",
                              url: "https://www.swiggy.com/city/pune/global-punjab",
                            },
                            {
                              label: "Chaitanya Paranthas",
                              url: "https://www.swiggy.com/city/pune/chaitanya-paranthas",
                            },
                            {
                              label: "Shawarma King",
                              url: "https://www.swiggy.com/city/pune/shawarma-king",
                            },
                            {
                              label: "Falahaar",
                              url: "https://www.swiggy.com/city/pune/falahaar",
                            },
                            {
                              label: "Joshi Wadewale",
                              url: "https://www.swiggy.com/city/pune/joshi-wadewale",
                            },
                            {
                              label: "Krishna Veg",
                              url: "https://www.swiggy.com/city/pune/krishna-veg",
                            },
                            {
                              label: "Sudamache Pohe",
                              url: "https://www.swiggy.com/city/pune/sudamache-pohe",
                            },
                            {
                              label: "S Kumar Wadewale",
                              url: "https://www.swiggy.com/city/pune/s-kumar-wadewale",
                            },
                            {
                              label: "Cafe Peter",
                              url: "https://www.swiggy.com/city/pune/cafe-peter",
                            },
                            {
                              label: "Dadus Sweet Emporio",
                              url: "https://www.swiggy.com/city/pune/dadus-sweet-emporio",
                            },
                            {
                              label: "Rohit Wadewale",
                              url: "https://www.swiggy.com/city/pune/rohit-wadewale",
                            },
                            {
                              label: "Food Junction",
                              url: "https://www.swiggy.com/city/pune/food-junction",
                            },
                            {
                              label: "Pk Biryani House",
                              url: "https://www.swiggy.com/city/pune/pk-biryani-house",
                            },
                            {
                              label: "Mithas",
                              url: "https://www.swiggy.com/city/pune/mithas",
                            },
                            {
                              label: "Zaika",
                              url: "https://www.swiggy.com/city/pune/zaika",
                            },
                            {
                              label: "Uncles Chinese",
                              url: "https://www.swiggy.com/city/pune/uncles-chinese",
                            },
                            {
                              label: "Circle Of Crust",
                              url: "https://www.swiggy.com/city/pune/circle-of-crust",
                            },
                            {
                              label: "Gokul Pure Veg",
                              url: "https://www.swiggy.com/city/pune/gokul-pure-veg",
                            },
                            {
                              label: "Al Zaika",
                              url: "https://www.swiggy.com/city/pune/al-zaika",
                            },
                            {
                              label: "Nandus Paratha",
                              url: "https://www.swiggy.com/city/pune/nandus-paratha",
                            },
                            {
                              label: "Mankar Dosa Centre",
                              url: "https://www.swiggy.com/city/pune/mankar-dosa-centre",
                            },
                            {
                              label: "Cafe Durga",
                              url: "https://www.swiggy.com/city/pune/cafe-durga",
                            },
                            {
                              label: "Katakirrr Misal",
                              url: "https://www.swiggy.com/city/pune/katakirrr-misal",
                            },
                            {
                              label: "The Pizza Box",
                              url: "https://www.swiggy.com/city/pune/the-pizza-box",
                            },
                            {
                              label: "Rollfie",
                              url: "https://www.swiggy.com/city/pune/rollfie",
                            },
                            {
                              label: "Aamhi Pohekar",
                              url: "https://www.swiggy.com/city/pune/aamhi-pohekar",
                            },
                            {
                              label: "Ganesh Bhel",
                              url: "https://www.swiggy.com/city/pune/ganesh-bhel",
                            },
                            {
                              label: "Flavours Of Andhra",
                              url: "https://www.swiggy.com/city/pune/flavours-of-andhra",
                            },
                            {
                              label: "Atithi Veg",
                              url: "https://www.swiggy.com/city/pune/atithi-veg",
                            },
                            {
                              label: "Biryani Badshah",
                              url: "https://www.swiggy.com/city/pune/biryani-badshah",
                            },
                            {
                              label: "Monginis Cake Shop",
                              url: "https://www.swiggy.com/city/pune/monginis-cake-shop",
                            },
                            {
                              label: "The Chinese Hub",
                              url: "https://www.swiggy.com/city/pune/the-chinese-hub",
                            },
                            {
                              label: "Naadbramha Idli",
                              url: "https://www.swiggy.com/city/pune/naadbramha-idli",
                            },
                            {
                              label: "Sudama Bhel",
                              url: "https://www.swiggy.com/city/pune/sudama-bhel",
                            },
                            {
                              label: "The Bombay Paratha Company",
                              url: "https://www.swiggy.com/city/pune/the-bombay-paratha-company",
                            },
                            {
                              label: "Sujata Mastani",
                              url: "https://www.swiggy.com/city/pune/sujata-mastani",
                            },
                            {
                              label: "Pokket Cafe",
                              url: "https://www.swiggy.com/city/pune/pokket-cafe",
                            },
                            {
                              label: "Mh 12 Pav Bhaji",
                              url: "https://www.swiggy.com/city/pune/mh-12-pav-bhaji",
                            },
                            {
                              label: "We Idliwale",
                              url: "https://www.swiggy.com/city/pune/we-idliwale",
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.gandalf.widgets.v2.SeoFooter",
                      socialLinks: [
                        {
                          label: "Linkedin",
                          url: "https://www.linkedin.com/company/swiggy-in/",
                        },
                        {
                          label: "Instagram",
                          url: "https://www.instagram.com/swiggyindia/?hl=en",
                        },
                        {
                          label: "Facebook",
                          url: "https://www.facebook.com/swiggy.in/",
                        },
                        {
                          label: "Pinterest",
                          url: "https://in.pinterest.com/swiggyindia/",
                        },
                        {
                          label: "Twitter",
                          url: "https://twitter.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.gandalf.widgets.v2.AppInstallLinks",
                      title:
                        "For better experience,download the Swiggy app now",
                      androidAppImage: "portal/m/play_store.png",
                      androidAppLink:
                        "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
                      iosAppImage: "portal/m/app_store.png",
                      iosAppLink:
                        "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.gandalf.widgets.v2.PageMetaInfo",
                      title: "Order from Udupi Bhavan online in Pune | Swiggy",
                      description:
                        "Order Online from Udupi Bhavan in Kothrud, Pune for delicious South Indian food. Enjoy fast delivery with Swiggy.",
                      keywords:
                        "Udupi Bhavan, Kothrud, Pune, South Indian, food delivery, order food online",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "eyJLSUQiOiIyIiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3OTMyNDM4ODgsImlhdCI6MTc5MzI0MDI4OCwic2Vzc2lvbl9kYXRhIjoiNFF2d0pnNkplZ21qT0hpRXBjVUtJRSt3Q2JlU0hEVTRIeTFPcXdaZURsM0VGWHlWUDhOT1lVZEw2STQyLzZRTDFqQ25TQXJybHVFR3VhYXZvT0J6Tk40eEd6cnlrWWt4WHJFVDR5QTFwbjgxOUxtVkxXMWFOVHRvRFcra3ByRjFuSll0K2dsdnZFSDhUQ3FGRE9QNmg3WmQzK0FGYkNIR2kvdTZwbGpReTBBaVVtUVl5YVU0MWxubytIRldCeHdmaEtaN3NrdUlraDY3MEtUTjlOV1gxQT09Iiwic2lkIjoidWc3NTNiM2RhMWEtMWY4Ny00MjNkLTgxODctODZjMTdjMTM0Iiwic3ViIjoiMTVmZjFjMWYtYmQ0NC00MzNjLTljOWUtMGYxYTY2OTg4YmFjIiwidXNlcl9pZCI6IjAifQ.kd1zDnAEHAcCODZPrKFh4rY-3hmPjJQY-ZYCgmzdnbQ",
  sid: "ug753b3da1a-1f87-423d-8187-86c17c134",
  deviceId: "1700f273-f7dc-58df-c994-734636eed9ed",
  csrfToken: "PtzCdhLjAoEe-cx04uC48ugFL_qZynnCIL83Oy8Y",
};

export default resMenu;
