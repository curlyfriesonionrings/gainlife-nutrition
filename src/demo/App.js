import React from 'react';
import Nutrition from '../lib';

const phaseData = {
    duration: 14,
    title:'Invigorate',
    iconName: 'youtube play',
    planUri:'https://s3.amazonaws.com/gainlife-pdf/powerup-plan-1.pdf',
    planVideoUri: 'https://s3.amazonaws.com/gainlife-vid/sample.mp4',
    welcomeText: 'Welcome to Invigorate!',
    welcomeSubtitle: 'Your 2 week weightloss jump start',
    welcomeText2: "Here's How Invigorate Works",
    welcomeText3: "Here's What You'll Do",
    intro1: [
        {
            text:"Follow nutrition guidelines and a food list that jumpstart your metabolism",
            iconName: 'flame'
        },
        {
            text:"After 2 weeks, move on to Nurture for more variety, or stick around here for longer!",
            iconName: 'heart-2'
        },
        {
            text:"To learn more search Invigorate Phase in the FAQ's",
            iconName: 'faq2',
            linkOut:true
        }
    ],
    intro2: [
        {
            text: "Eat 5 to 6 times a day to power your metabolism",
            iconName: 'guidelines-1'
        },
        {
            text: "Choose protein to maintain lean muscle",
            iconName: 'guidelines-2'
        },
        {
            text: "Limit carbs to train your body to burn stored fat",
            iconName: 'guidelines-9'
        }
    ],
    summary: [
        {iconName: 'mini-calendar', text: 'A more restrictive first 2 weeks leads to fast results'},
        {iconName: 'mini-fork', text: 'Enjoy more food variety as you progress'},
        {iconName: 'mini-star', text: 'Limit carbs and add protein to shed fat, not muscle'}
    ],
    selectedText: 'Invigorate summary',
    mealPlan: [
        {dayItems: [
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Breakfast',
                icons: ['setting', 'home'],
                items: ['Egg whites', 'Spinach', 'Oatmeal']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Lunch',
                icons: ['trophy', 'home'],
                items: ['Zuchini Noodles With Red Pepper Sauce']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Dinner',
                icons: ['setting'],
                items: ['Teriyaki Salmon', 'Spiralized Zucchini']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'trophy'],
                items: ['Almonds', 'Cottage cheese']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'home'],
                items: ['Protein shake with skim milk']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'home'],
                items: ['Mocha Chocolate Muffins']
            }
        ]},
        {dayItems: [
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Breakfast',
                icons: ['setting', 'home', 'trophy'],
                items: ['Mashed pumpkin', 'Plain Greek yogurt', 'Almonds']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Lunch',
                icons: ['setting', 'trophy'],
                items: ['Rosemary Chicken Noodle Soup']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Dinner',
                icons: ['setting', 'trophy'],
                items: ['Grilled cod', 'Roasted asparagus with olive oil']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'home'],
                items: ['Mocha Chocolate Muffins']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting'],
                items: ['Carrot sticks', 'Tuna pouch']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'home'],
                items: ['Protein shake with skim milk']
            }
        ]},
        {dayItems: [
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Breakfast',
                icons: ['setting', 'home'],
                items: ['1/2 c oatmeal', '1 c fat-free cottage cheese']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Lunch',
                icons: ['setting', 'trophy'],
                items: ['Grilled Chicken Breast', 'Green Salad']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Dinner',
                icons: ['setting', 'trophy'],
                items: ['Lime Cilantro Chicken', 'Steamed Broccoli']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'home'],
                items: ['Protein shake with skim milk']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting'],
                items: ['Cucumber slices', 'Tuna pouch with mustard']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'home'],
                items: ['1/2 c oatmeal', '1 c fat-free cottage cheese']
            }
        ]},
        {dayItems: [
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Breakfast',
                icons: ['home'],
                items: ['Slow Cooker Pumpkin Pie Oatmeal']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Lunch',
                icons: ['setting'],
                items: ['Pizza Cauliflower Bites', 'Zucchini Noodles']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Dinner',
                icons: ['setting', 'trophy'],
                items: ['Lemon Herb Salmon Cakes', 'Steamed carrots']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'home'],
                items: ['Greek yogurt', 'Skim milk latte']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'trophy'],
                items: ['Cottage cheese', 'Almonds']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'home'],
                items: ['Mocha Chocolate Muffins']
            }
        ]},
        {dayItems: [
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Breakfast',
                icons: ['setting', 'home'],
                items: ['Black Forest Pancakes']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Lunch',
                icons: ['setting'],
                items: ['Grilled Salmon', 'Green salad']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Dinner',
                icons: ['setting', 'trophy'],
                items: ['Skillet Sazon Chicken Tenders', 'Cauliflower rice']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'home'],
                items: ['Protein shake with skim milk']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'trophy'],
                items: ['Carrot chips', 'Greek yogurt with ranch seasoning']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'home'],
                items: ['Oatmeal with protein powder']
            }
        ]},
        {dayItems: [
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Breakfast',
                icons: ['setting', 'home'],
                items: ['Egg whites with veggies', 'Skim milk latte']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Lunch',
                icons: ['setting'],
                items: ['Rosemary Chicken Noodle Soup']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Dinner',
                icons: ['setting', 'trophy'],
                items: ['Stuffed Flank Steak', 'Mashed cauliflower']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'home'],
                items: ['Mashed pumpkin', 'Greek yogurt']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'trophy'],
                items: ['Walnuts', 'Cottage cheese']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'home'],
                items: ['Mocha Chocolate Muffins']
            }
        ]},
        {dayItems: [
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Breakfast',
                icons: ['setting', 'home'],
                items: ['Black Forest Pancakes']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Lunch',
                icons: ['setting', 'trophy'],
                items: ['Chicken salad with walnuts, yogurt and spinach']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Dinner',
                icons: ['setting', 'trophy'],
                items: ['Sesame Chicken Bowl']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['home'],
                items: ['Slow Cooker Pumpkin Pie Oatmeal']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting'],
                items: ['Cherry tomatoes', 'Tuna pouch with mustard']
            },
            {   imageName: 'http://via.placeholder.com/500x300',
                title: 'Snack',
                icons: ['setting', 'home'],
                items: ['Cottage cheese', 'Mashed pumpkin']
            }
        ]}
    ],
    foods: [
        {
            type: 'Vegetables',
            tagline: 'Have unlimited non-starchy veggies and at least 3 servings a day for a boost of fiber and flavor',
            iconName: 'food-veg',
            imageName: 'vegetables',
            subtypes: [
                {
                    type: 'Greens',
                    iconName: 'veg-leaf',
                    foods: [
                        'Salad greens',
                        'Cabbage and Chinese cabbage',
                        'Brussels sprouts',
                        'Collards',
                        'Chard',
                        'Kale',
                        'Spinach'
                    ]
                },
                {
                    type: 'Roots',
                    iconName: 'veg-root',
                    foods: [
                        'Beets',
                        'Carrots',
                        'Fennel',
                        'Onions',
                        'Scallions',
                        'Parsnip',
                        'Radish',
                        'Turnip',
                        'Rutabaga'
                    ]
                },
                {
                    type: 'More',
                    iconName: 'veg-others',
                    foods: [
                        'Artichokes',
                        'Asparagus',
                        'Broccoli',
                        'Cauliflower',
                        'Celery',
                        'Cucumbers',
                        'Eggplant',
                        'Green beans',
                        'Mushrooms',
                        'Peppers (sweet & hot)',
                        'Summer squash (yellow squash)',
                        'Tomatoes; and sauce and paste',
                        'Zucchini'
                    ]
                }
            ]
        },
        {
            type: 'Healthy Fats',
            tagline: 'Have 2 servings of fats a day. Feel free to split them between meals',
            iconName: 'fat-nuts',
            imageName: 'fats',
            subtypes: [
                {
                    type: 'Nuts',
                    iconName: 'fat-nuts',
                    foods: [
                        'Almonds (18)',
                        'Walnuts (9 halves)'
                    ]
                },
                {
                    type: 'Oils (1 tbsp)',
                    iconName: 'fat-oil',
                    foods: [
                        'Canola oil',
                        'Olive oil'
                    ]
                }
            ]
        },
        {
            type: 'Lean Proteins',
            tagline: 'Have 5-6 protein servings a day, paired with a veggie or carb to stay full and maintain muscle. A serving is 4-6 oz, unless noted',
            imageName: 'proteins',
            iconName: 'food-proteins',
            subtypes: [
                {
                    type: 'Red Meat',
                    iconName: 'proteins-red',
                    foods: [
                        'Eye of round roast',
                        'Ground beef (extra lean)',
                        'Pork tenderloin',
                        'Round steak (top & bottom)',
                        'Sirloin tip side steak',
                        'Top sirloin steak'
                    ]
                },
                {
                    type: 'White Meat',
                    iconName: 'proteins-white',
                    foods: [
                        'Chicken breast, skinless/ground',
                        'Turkey breast, skinless/ground'
                    ]
                },
                {
                    type: 'Fish',
                    iconName: 'proteins-fish',
                    foods: [
                        'Cod',
                        'Mahi-mahi',
                        'Salmon',
                        'Snapper',
                        'Tilapia',
                        'Tuna',
                        'White fish'
                    ]
                },
                {
                    type: 'Dairy & Protein Powder',
                    iconName: 'proteins-daily',
                    foods: [
                        'Cottage cheese, fat-free (1 cup)',
                        'Egg whites (6 eggs = 1 cup)',
                        'Greek yogurt, non-fat plain (1 cup)',
                        'Protein powder (1 scoop @ at least 20g protein)'
                    ]
                }
            ]
        },
        {
            type: 'Drinks',
            tagline: 'Unlimited',
            imageName: 'drinks',
            iconName: 'food-drink',
            subtypes: [
                {
                    type: 'Calorie-free Drinks',
                    iconName: 'food-drink',
                    foods: [
                        'Unsweetened coffee or tea',
                        'Sparkling water',
                        'Zero-calorie flavored water',
                        'Diet soda'
                    ]
                }
            ]
        },
        {
            type: 'Carbs',
            tagline: '3 servings a day. A serving is 1 cup, unless noted',
            imageName: 'carbs',
            iconName: 'food-carbs',
            subtypes: [
                {
                    type: 'Dairy',
                    iconName: 'other-dairy',
                    foods: [
                        'Almond milk, unsweetened',
                        'Fat-free milk'
                    ]
                },
                {
                    type: 'Grains',
                    iconName: 'other-grains',
                    foods: [
                        'Oats, steel-cut (1/4 cup dry)',
                        'Oats, old-fashioned (1/2 cup dry)'
                    ]
                },
                {
                    type: 'Fruits',
                    iconName: 'other-fruits',
                    foods: [
                        'Pumpkin, mashed'
                    ]
                }
            ]
        },
        {
            type: 'Condiments',
            tagline: 'Enjoy unlimited flavorings and spices, as long as they contain less than 2g of sugar and 1.5g of fat per serving, such as:',
            imageName: 'condiments',
            iconName: 'guidelines-pepper',
            subtypes: [
                {
                    type: 'Spices',
                    iconName: 'guidelines-pepper',
                    foods: [
                        'Spices',
                        'Hot sauce',
                    ],
                },
                {
                    type: 'Sweeteners and Flavorings',
                    iconName: 'other-fruits',
                    foods: [
                        'Calorie-free sugar substitutes',
                        'Vanilla extract',
                        'Unsweetened cocoa powder',
                        'Sugar-free Syrup',
                        'Sugar-free Jell-O',
                        'Powdered peanut butter',
                    ],
                },
                {
                    type: 'Sauces and Dressings',
                    iconName: 'fat-oil',
                    foods: [
                        'Mustard',
                        'Lemon juice',
                        'Vinegar',
                        'Low-sugar and fat salad dressing',
                        'Low-sugar pasta sauce',
                        'Fat-free cream cheese'
                    ]
                }
            ]
        }
    ],
    guidelines: [
        {iconName: 'guidelines-1', title: 'Eat 5-6 meals/snacks a day', text: 'Eating small meals throughout the day powers your metabolism and cuts cravings. Eat within an hour of waking up to get your metabolism off to a strong start.'},
        {iconName: 'guidelines-3', title: 'Focus on �real�, good for you, foods', text: 'Your nutrition guidelines include lean proteins, complex carbs, healthy fats, and vegetables - foods that aren�t highly processed, without added fats and sugar.'},
        {iconName: 'guidelines-variety', title: 'Variety is Key', text: 'You probably could live off cottage cheese and carrots, but it might not be that fun. Using your nutrition guidelines, add variety wherever possible, and see Meal Prep for inspiration.'},
        {iconName: 'guideline-6', title: 'Drink Plenty of Water', text: 'Water keeps you hydrated and helps power your metabolism. Have as many calorie-free drinks as you like, including 2 glasses of water before each meal or snack'}
    ],
    recipes: [
        {
            imageName: 'http://via.placeholder.com/500x300',
            directions: [
                'Slice garlic into small slivers',
                'Gently make small (1/2") cuts into tuna steaks (evenly distributed)',
                'Fill the small cuts with sliced garlic',
                'Sprinkle tuna with kosher salt',
                'Pour oil and lime juice on top of tuna steak and let sit for about 30 min.',
                'Heat grill or grill pan to medium-high, and sear each side to desired doneness. (About 60-90 seconds on each side)',
            ],
            ingredients: [
                '5 oz ahi tuna steak',
                '1/2 fresh lime 1 clove garlic 1 tsp. olive oil 1/4 tsp. kosher salt'
            ],
            title: 'Seared Tuna Steaks',
            description: '1 serving',
            credit: 'WLS Daily Plate'
        },
        {
            imageName: 'http://via.placeholder.com/500x300',
            directions: [
                'Thinly slice chicken breasts Pat dry with paper towel',
                'Sprinkle with salt, pepper, rosemary',
                'Heat large nonstick skillet over medium-high heat, add oil',
                'Once oil is hot add chicken. Make sure each piece of chicken space',
                'Cook about 2-3 minutes on one side until the chicken flips easily, flip each piece',
                'Continue cooking on other side',
                'Add balsamic vinegar to skillet and continue cooking for an additional 2-3 minutes until chicken is cooked through.'
            ],
            ingredients: [
                '1 1/2 chicken breasts (about 8 oz)',
                '2 Tbsp balsamic vinegar',
                '1 tsp. dried rosemary',
                '1/2 tsp. salt',
                '1/2 tsp. black pepper',
                '1 tsp. olive oil'
            ],
            title: 'Rosemary Balsamic Chicken',
            description: '2 servings',
            credit: 'WLS Daily Plate'
        },
        {
            imageName: 'http://via.placeholder.com/500x300',
            directions: [
                'Cut chicken into bite size cubes and place in gallon ziplock bag',
                'In a blender - blend: soy sauce, almond milk, coconut extract, lime juice, rice vinegar, syurp, garlic, ginger, pepper until smooth',
                'Pour marinade over chicken and seal ziplock bag',
                'Marinate in refrigerator for at least one hour, up to 24',
                'Heat grill or grill pan to medium-high and lightly oil the grates',
                'Remove chicken from marinade and thread skewers',
                'Grill 5-10 minutes on each side'
            ],
            ingredients: [
                '1 pound skinless chicken breast, cut into bite sized cubes',
                '1/2 cup soy sauce',
                '1/4 cup almond milk',
                '1/4 tsp coconut extract juice of 1 lime',
                '1/8 cup rice vinegar',
                '1/8 cup no-calorie syurp',
                '3 cloves garlic, minced',
                '1-2 tsp. fresh grated ginger (or 1/8 tsp. dry)',
                '1/4 tsp. black pepper'
            ],
            title: 'Coconut Lime Chicken Adobo Skewers',
            description: '4 servings',
            credit: 'WLS Daily Plate'
        },
        {
            imageName: 'http://via.placeholder.com/500x300',
            directions: [
                'Pour oil in a large pot and saut� onion and garlic, stirring for about 3 minutes',
                'Add ground turkey, breaking apart and cooking until brown',
                'Add the rest of the ingredients, bring to a boil and simmer over low heat for an hour.'
            ],
            ingredients: [
                '1 lb fat-free ground turkey',
                '1 yellow onion, chopped',
                '3 cloves garlic, minced',
                '1 Tbsp canola or olive oil',
                '2 15oz cans crushed tomatoes, no-salt added',
                '1 red bell pepper, chopped',
                '2 ribs celery, chopped',
                '3 carrots, chopped',
                'salt & pepper to taste',
                'Mix chili powder, adobo, cayenne, oregano to taste'
            ],
            title: 'Turkey Chili',
            description: '4 servings',
            credit: 'Training Camp Recipes'
        },
        {
            imageName: 'http://via.placeholder.com/500x300',
            directions: [
                'Rinse lettuce leaves In a medium saut� pan, heat the canola oil, add the ground beef, breaking apart and cooking until brown',
                'Set beef aside, cook onion, stirring for about 3 minutes',
                'Add Add the cooked and drained ground beef and the rest of the ingredients and cook a few minutes until flavors have melded.'
            ],
            ingredients: [
                '1 lb extra-lean ground beef',
                '1 Tbsp canola oil',
                '1 yellow onion, chopped',
                '2 cloves garlic, minced',
                '1 Tbsp low-sodium soy sauce',
                '2 tsp ginger, minced',
                '1 Tbsp rice wine vinegar',
                '2 tsp toasted sesame oil',
                '5 green onions, chopped',
                'Spice to taste'
            ],
            title: 'Asian Lettuce Wrap',
            description: '4 servings',
            credit: 'Training Camp Recipes'
        },
        {
            imageName: 'http://via.placeholder.com/500x300',
            directions: [
                'Preheat Oven to 425.',
                'Mix all ingredients together in a bowl',
                'Heat non-stick pan with a little vegetable oil spray',
                'Form turkey mixture into meatball size patties (about 15)',
                'Brown on nicely both sides',
                'place on sheet pan and cook in oven for about 10 minutes',
                'For sauce: Mix all yogurt sauce ingredients in a bowl'
            ],
            ingredients: [
                'Burger: 1 lb Ground Turkey',
                '1 LG Zucchini Shredded',
                '2 Cloves Garlic Chopped',
                '1 Egg',
                '2 Tbsp Chopped Cilantro',
                '2 Tbsp Chopped Mint',
                '3 Green Onions, thinly Sliced',
                '1 tsp Ground Cumin',
                '1/2 tsp Cayenne Pepper',
                'S & P',
                'Yogurt Sauce: 1 Non-Fat Greek Yogurt',
                '1 Tbsp Lemon Juice',
                '1 tsp Grated Lemon Zest',
                '1 Small Clove Garlic Chopped',
                '1 1/2 Tbsp Olive oil',
                '1 tsp Sumac or Chili-Lime Seasoning',
                'S & P'
            ],
            title: 'Turkey burgers with a twist�',
            description: '4 servings',
            credit: 'Training Camp Recipes'
        },
        {
            imageName: 'http://via.placeholder.com/500x300',
            directions: [
                'Brown the meat in a skillet with a teaspoon of canola oil, or one spritz of cooking spray to keep the meat from burning',
                'Add the onion and carrot when the meat is about half done (3-5 minutes on med heat)',
                'Add the garlic, ginger and rest of the spices',
                'Stir well until the meat is cooked through.'
            ],
            ingredients: [
                '1 lb ground ultra-lean beef or turkey (or bison)',
                '1/2 medium onion, finely chopped',
                '1 carrot shaved and shavings cut into smaller pieces',
                '1 red bell pepper, seeded and chopped',
                '1 or 2 cloves garlic, finely minced',
                '1 tsp grated fresh ginger',
                '1 Tbsp soy sauce (low sodium)',
                '1 tsp Chinese five spice',
                '1 tsp Sriracha or garlic and pepper sauce'
            ],
            title: 'Versatile lean meat mix with Asian flair',
            description: '4 servings',
            credit: 'Training Camp Recipes'
        },
        {
            imageName: 'http://via.placeholder.com/500x300',
            directions: [
                'Combine all ingredients in a bowl and mix well.'
            ],
            ingredients: [
                '1 can albacore tuna',
                '2/3 cup non fat cottage cheese',
                '4 Tbsp plain non-fat Greek yogurt',
                '1/4 small read onion, finely chopped',
                '1 stalk celery, finely chopped',
                '1 tsp Dijon mustard',
                'Splash fresh lemon juice',
                'Pinch or two of dill'
            ],
            title: 'Tuna Salad',
            description: '3 servings',
            credit: 'Training Camp Recipes'
        }
    ]
}

const App = () => (
  <Nutrition phaseData={phaseData} />
);

export default App;
