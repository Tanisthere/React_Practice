Refer :
https://www.freecodecamp.org/news/how-to-use-parcel-to-bundle-your-react-js-application-d023979e9fe4/#:~:text=In%20this%20article%2C%20I%E2%80%99ll%20show%20you%20how%20you,like%20create-react-app%20or%20anything%20like%20that.%20Getting%20started.


i> See diff is : in working package.json ->   "scripts": {
                                            "test": "jest",
                                 "start": "parcel index.html --open"
                                            },
  
  while in non working code package.json is:
  ->    "scripts": {
    "test": "jest"
  },


ii>  -> in working package.json file.
  "devDependencies": {
    "parcel-bundler": "^1.12.5"
  },

  while in non working code package.json is:
  ->   "devDependencies": {
    "parcel": "^2.13.3",
    "process": "^0.11.10"
  },

  iii> in working package.json it has parcel-cache as :
  -> folders from  00 , 0a ,0b.... < so many such folders > with 'dist' folder

  while in non working code package.json is:
-> it has only 2 files : a> data.mdb and b> lock.mdb

iv>
