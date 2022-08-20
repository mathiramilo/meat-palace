<!-- MeatPalace Logo -->
![Logo Meat Palace](/src/assets/img/logo/logo.png)

**Meat Palace** is an ecommerce created with [**React JS**](https://reactjs.org/) where you can buy meats of diferent types and qualities as well as other products for an amazing barbacue.

![Navigation Flow](/readme/design/navigation.gif)

# **Features**

1. **`Filter Products`** (Users can filter the products by category in the shop section)
2. **`Quick Add`** (Products can be easily added to the cart with this feature)
3. **`Product Detail`** (Users can click on a product to see more informaton and choose an amount to add to the cart)
4. **`Cart Management`** (In the cart, users can modify the amount of an added product or remove it)
5. **`Order Receipt`** (When checkout is completed, the order receipt is displayed, it shows the buyer information, lists the ordered products and shows the total cost and id of the purchase)
6. **`Authentication`** (Signup and Login, users must be logged in to checkout)

# **UI/UX Design**

### `Full responsive and clean design`

To obtain this **great result**, I designed each page and each element of this website in a complete and detailed way. To carry out this task I use [**Figma**](https://www.figma.com/).

![Global Design](/readme/design/global-design.jpg)
Global Design

# Technical Information

## Frameworks

* **`React JS`** (Free and open-source frontend JavaScript library for building user interfaces based on UI components. React can be used as a base in the development of single-page, mobile, or server-rendered applications)

## Languages

* **`Typescript`** (Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale)
* **`CSS3`** (Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML)
* **`JSX-TSX`** (JavaScript extension that allows us to describe React's object tree using a syntax that resembles that of an HTML template)

## Firebase

* **`Firestore`** (Cloud Firestore is a NoSQL document database that makes it easy to store, sync, and query data across your web and mobile apps. Used to store the **Products** and **Orders**)

* **`Authentication`** (Firebase Authentication aims to make it easier to build secure authentication systems while improving the onboarding and login experience for end users. Used to register and log users)

```tsx
/* Firebase configuration and initialization */
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {...}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
```

```py
/* Fetching data from firestore using queries */
const db = getFirestore()
const productsCollection = collection(db, 'products')

if (limit) {
  const q = query(
      productsCollection,
      where('category', '==', 'wagyu')
  )

  getDocs(q).then(snapshot => setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).filter(({ name }: any) => name === 'Wagyu Tomahawk 1kg' || name === 'Wagyu Ribeye 1kg' || name === 'Wagyu Outside Skirt 1kg' || name === 'Wagyu Short Ribs 1kg') as Product[]))
  .catch(err => setError(true))
  .finally(() => setLoading(false))

} else if (category === 'all') {
  getDocs(productsCollection).then(snapshot => {
    const allProducts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[]
    const allMeats = allProducts.filter(prod => prod.category !== 'other')
    setProducts(allMeats)
  })
  .catch(err => setError(true))
  .finally(() => setLoading(false))

} else {
  const q2 = query(
    productsCollection,
    where('category', '==', category)
  )
  getDocs(q2).then(snapshot => setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[]))
  .catch(err => setError(true))
  .finally(() => setLoading(false))
}
```

```js
/* Using Firebase Authentication to create an AuthContext */
import { auth } from 'index'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'

export const AuthContext = createContext<IAuthContext>({})

type props = {
  children: JSX.Element | JSX.Element[]
}

export function AuthContextProvider({ children }: props) {
  const [user, setUser] = useState<any>(null)

  const signup = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password)
  const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password)
  const logout = () => signOut(auth)

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })

    return () => unsuscribe()
  }, [])

  return <AuthContext.Provider value={{
    user,
    signup,
    login,
    logout,
    setUserLS
  }}>
    { children }
  </AuthContext.Provider>
}
```

## Libraries

* **`React Router DOM`** (Used to implement dynamic routing. It allows you to display pages and allow users to navigate them)

```tsx
/* Import the necessary components from React Router DOM */
import { Routes, Route, Navigate } from 'react-router-dom'

/* Component that has all the app routes configuration */
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop/:category" element={<Shop />} />
      <Route path="/shop" element={<Navigate to="/shop/all" />} />
      <Route path="/product/:productID" element={<ProductDetailContainer />} />
      {<Route path="/cart" element={<Cart />} />}
      <Route path="/billing" element={<Billing />} />
      {/* Any unknown path will be redirected to home page */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
```

* **`React Toastify`** (Used to obtain a better communication with the user through the notification of certain actions, give information or alert errors)

# General Information

Final Project of Coderhouse React JS Course.

* Developed by **Mathias Ramilo**.
* Visit the [**Website**](https://meatpalace-ramilo.web.app) and see it for yourself.

### **Personal Data**

* Visit my [**GitHub**](https://github.com/mathiramilo) profile to see more amazing proyects.
* If you are interested, contact me on [**Linkedin**](https://www.linkedin.com/in/mathias-ramilo/).
  
# Instructions

These instructions were automatically generated by react-create-app.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
