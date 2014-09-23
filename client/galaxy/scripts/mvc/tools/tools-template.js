// dependencies
define([], function() {

// tool form templates
return {
    help: function(content) {
        return  '<div class="toolHelp">' +
                    '<div class="toolHelpBody">' +
                        content +
                    '</div>' +
                '</div>';
    },
    
    citations: function() {
        return  '<div id="citations"></div>';
    },
    
    success: function(response) {
        // number of jobs
        var njobs = response.jobs.length;
        
        // job count info text
        var njobs_text = '';
        if (njobs == 1) {
            njobs_text = '1 job has';
        } else {
            njobs_text = njobs + ' jobs have been';
        }
       
        // create template string
        var tmpl =  '<div class="donemessagelarge">' +
                        '<p>' + njobs_text + ' been successfully added to the queue - resulting in the following datasets:</p>';
        for (var i in response.outputs) {
            tmpl +=     '<p style="padding: 10px 20px;"><b>' + (parseInt(i)+1) + ': ' + response.outputs[i].name + '</b></p>';
        }
        tmpl +=         '<p>You can check the status of queued jobs and view the resulting data by refreshing the History pane. When the job has been run the status will change from \'running\' to \'finished\' if completed successfully or \'error\' if problems were encountered.</p>' +
                    '</div>';
       
        // return success message element
        return tmpl;
    }
};

});