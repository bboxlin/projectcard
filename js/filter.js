function filterClickListener(key) {
    $('#' + key).click(function(event) {
        event.preventDefault();

        // get selected programming language
        let shouldAllDisplay = false 
        let selectedValue = document.getElementById("languages").value.toLowerCase().trim();
        if (selectedValue === "default") {
            shouldAllDisplay = true   
        }

        let projects = $("#projects")
        projects.children('div').each(function() {
            const languages = $(this).data('languages').split(",")
            var langset = new Set()
            for (const lang of languages) {
                langset.add(lang.toLowerCase())
            }
            // If selectedValue is not in langset, hide this div; otherwise, show it
            if (shouldAllDisplay || langset.has(selectedValue)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        })
    });
}

