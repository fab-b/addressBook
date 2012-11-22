Aria.tplScriptDefinition({
    $classpath : "addressBook.templates.SearchBoxScript",
    $prototype : {
        textValue : "",

        $dataReady : function () {
            // Load the external DB (json)
            var url = "./mock/contactsDB.json";
    
            aria.core.IO.asyncRequest({
                url : url,
                expectedResponseType : "json",
                callback : {
                    fn : this._dataLoaded,
                    onerror : this._onDataLoadError,
                    scope : this
                }
            });
        },

        searchContact : function () {
            var query = this.data.query;

            this.data.results = [];

            if (query.indexOf(" ") == -1) {
                this._searchOneWord(query);
            } else {
                this._searchMoreWords(query);
            }
            console.log("___ " + this.data.results);
        },

        _searchOneWord : function (query) {
            var addressBook = this.data.addressBook.addressBook;
            var query = query.toLowerCase();
            var tmp = [];

            for(var i=0; i < addressBook.length; i++) {
                var contact = addressBook[i];
                
                for (var field in contact) {
                    if ((!aria.utils.Json.isMetadata(field)) && (contact.hasOwnProperty(field))) {
                        if (contact[field].toLowerCase() == query) {
                            tmp.push(contact);        
                        }
                    }
                }
            }
            this.$json.setValue(this.data, "results", tmp);
        },

        _searchMoreWords : function (query) {
            var addressBook = this.data.addressBook.addressBook;
            var query = query.toLowerCase();
            var words = query.split(" ");
            var tmpRes = [];

            for(var i=0; i < addressBook.length; i++) {
                var contact = addressBook[i];

                for (var field in contact) {
                    if ((!aria.utils.Json.isMetadata(field)) && (contact.hasOwnProperty(field))) {
                        for (var j=0; j < words.length; j++) {
                            if (contact[field].toLowerCase() == words[j]) {

                                var idx = this._checkContactInRes(contact, tmpRes);
                                if (idx == -1) {
                                    var obj = {
                                        who : contact,
                                        numMatches : 1
                                    };

                                    tmpRes.push(obj);
                                } else {
                                    tmpRes[idx].numMatches++;
                                }

                            }
                        }
                    }
                }
            }

            tmpRes = this._sortRes(tmpRes);
            this._copyRes(tmpRes);
        },

        _checkContactInRes : function (contact, results) {
            for(var i=0; i < results.length; i++) {
                if (aria.utils.Json.equals(contact, results[i].who)) {
                    return i;
                }
            }
            return -1;
        },

        _sortRes : function (results) {
            var sort_by = function(field, reverse, primer){

                var key = function (x) {return primer ? primer(x[field]) : x[field]};

                return function (a,b) {
                    var A = key(a), B = key(b);
                    return ((A < B) ? -1 : (A > B) ? +1 : 0) * [-1,1][+!!reverse];                  
                }
            }

            results.sort(sort_by('numMatches', false, parseInt));
            return results;
        },

        _copyRes : function (results) {
            var max = results[0].numMatches;            
            var tmp = [];

            for (var i=0; i < results.length; i++) {
                if (results[i].numMatches == max) {
                    tmp.push(results[i].who);
                }
            }
            
            this.$json.setValue(this.data, "results", tmp);
        },

        _dataLoaded : function (ioRes) {
            if (ioRes.status == 200) {
                this.data.addressBook = ioRes.responseJSON;
            } else {
                this.data.addressBook = [];
            }
        },

        textTyped : function (value) {
            if (value != this.textValue) {
                this.textValue = value;
                this.$json.setValue(this.data, "query", this.textValue);    
            }
        },

        navigateEnter : function () {
            if ((this.data.query !== undefined) && (this.data.query !== "")) { // ENTER
                this.searchContact();
            } 
        },

        _searchClicked : function () {
            if ((this.data.query !== undefined) && (this.data.query !== "")) { // CLICK
                this.searchContact();
            }
        },

        _onDataLoadError : function () {
            // Error loading ext json
        }
    }
});