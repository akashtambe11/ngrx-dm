# AngularRedux

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## NgRx Packages =====>
npm i @ngrx/store @ngrx/effects @ngrx/store-devtools @ngrx/schematics --save
or
npm install @ngrx/{store,effects, entity, store-devtools, schematics}

ng add @ngrx/schematics                                                         // For default value in Angular.json
___________________________________________________________________________________________________________________________________________________________________


## Folder Structure ==>
src >> app >> store (Folder) 
                    >> index.ts
                    >> app.reducers.ts 
                    >> actions (Folder)        
                        >> All action files
                    >> effects (Folder) 
                        >> All effect files
                    >> reducers (Folder) 
                        >> All reducers files
___________________________________________________________________________________________________________________________________________________________________


## Angular Setup =====>
1. Store: (Main Store: Contains all reducers file)
    ng generate store State --root --state-path store --module app.module.ts        // Direct Store Folder => Second store is folder name
    ng generate store State --root --module app.module.ts                           // In root folder

2. Central Effects: (Only use when multiple effects exist)
        2.1. Make app.effects.ts file in same store folder
        2.2. Import upcomming effets in it
                2.2.1 Code:
                            import { UserEffects } from './effects/user.effects';
                            export const AppEffects = [UserEffects];
        2.3. Import app.effects.ts file in app.module.ts 
                2.3.1. Add "EffectsModule.forRoot(AppEffects);" in imports array

3. Action:
    ng generate action ActionName
        3.1 What should be the prefix of the action? (Only Press Enter Key)
        3.2 Should we generate success and failure actions? Y
        3.3 Do you want to use the create function? Y

4. Reducer:
    ng generate reducers ReducerName --reducers ../../store/index.ts                 // To Import new reducers in store/index.js => You should be in root project
        4.1 Should we add success and failure actions to the reducer? Y
        4.2 Do you want to use the create function? Y

5. effect:
    ng generate effect EffectName --root -m app.module.ts                            // If only one effect is exist in project
    ng generate effect EffectName                                                    // If multple effects are exist in project => Import these effects in app.effects.ts

6. Selector:
    ng generate selector SelectorName
