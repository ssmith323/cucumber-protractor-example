# AngularCLI with Cucumber

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Packages Needed

To get everything running first add the following packages
* @types/chai
* @types/cucumber
* chai
* cucumber
* protractor-cucumber-framework

You can install them with the command below 
```
npm i -D @types/chai @types/cucumber chai cucumber protractor-cucumber-framework
```

I'm using -D here to install everything as a dev dependency and keep the package JSON cleaned up.  Cucumber does not come with an asseration library so we are using chai here

## Update e2e/tsconfig.e2e.json
We need to modify the types value with the below value.  The will allow the cucumber and chai functions to be used in our applications

```
    "types": [
      "chai",
      "cucumber",
      "node"
    ]
```

## Update e2e/protractor.conf.js
We have a few updates to be made in this file.  The first is change the spec file to use the below option to find our feature files.

```
  specs: [
    './src/features/**/*.feature'
  ],
```

For this we project, we are going tp ut all feature files in a folder called features withing the e2e folder.  So developers, POs, and te test project can find them easily.  You can modify this location if you would like.

Next, we need to declare that we are using the cucumber framework and specify where the steps are located.  Copy and pasted the below code to replace the framework already declared

```
framework: 'custom',
frameworkPath: require.resolve('protractor-cucumber-framework'),
cucumberOpts: {
  require: ['./src/steps/**/*.steps.ts'],
},
```

We are putting all step files in a steps folder and using the suffix of .steps.ts so we can easily find them.  Like the feature folder above feel free to change the path.  All the options in cucumberOpts are just basic cucumber.js options.  Feel free to add more options to fit your needs.

Now remove all references to jasmine in the file.

## Run
Now that all the setup work is done, we can run ng e2e to run our functional tests.
