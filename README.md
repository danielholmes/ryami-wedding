# Ryami Wedding

RSVP form and information for Ryan and Ami's Wedding.


## Requirements

 - NodeJS (tested with 8.1.2)
 - Yarn (tested with 0.24.6)


## Dev Setup

`yarn install`

Running a dev server:

`yarn start`

Which makes project available at [http://localhost:8054/](http://localhost:8054/)


## Build

`yarn run build`


## Deploying to Production

Create deployment config:

```
cp backend/.env.dist backend/.env
vi backend/.env
```

NOTE: You'll require the correct AWS credentials configured in your user account in order to deploy.

`yarn run deploy`

Or individual components:

`yarn run deploy-frontend`
`yarn run deploy-backend`
