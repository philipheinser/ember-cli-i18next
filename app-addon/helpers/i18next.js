'use strict';

import Ember from 'ember';

export default function(key, options) {

  if (!options) options = {};
  var opts = options.hash;

  var result = i18n.t(key, opts);
  
  return new Handlebars.SafeString(result);
}
