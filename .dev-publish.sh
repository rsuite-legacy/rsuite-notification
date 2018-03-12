#!/bin/bash
nrm use hypers
npm unpublish rsuite-notification@3.0.0-next.2
npm run build
npm publish
