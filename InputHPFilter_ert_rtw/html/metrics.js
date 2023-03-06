function CodeMetrics() {
	 this.metricsArray = {};
	 this.metricsArray.var = new Array();
	 this.metricsArray.fcn = new Array();
	 this.metricsArray.var["rtDW"] = {file: "\\\\fsg-ws017\\fsg\\Datenaustausch\\Faghih\\InputHPFilter_ert_rtw\\InputHPFilter.c",
	size: 16};
	 this.metricsArray.var["rtM_"] = {file: "\\\\fsg-ws017\\fsg\\Datenaustausch\\Faghih\\InputHPFilter_ert_rtw\\InputHPFilter.c",
	size: 4};
	 this.metricsArray.var["rtU"] = {file: "\\\\fsg-ws017\\fsg\\Datenaustausch\\Faghih\\InputHPFilter_ert_rtw\\InputHPFilter.c",
	size: 8};
	 this.metricsArray.var["rtY"] = {file: "\\\\fsg-ws017\\fsg\\Datenaustausch\\Faghih\\InputHPFilter_ert_rtw\\InputHPFilter.c",
	size: 8};
	 this.metricsArray.fcn["InputHPFilter_initialize"] = {file: "\\\\fsg-ws017\\fsg\\Datenaustausch\\Faghih\\InputHPFilter_ert_rtw\\InputHPFilter.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["InputHPFilter_step"] = {file: "\\\\fsg-ws017\\fsg\\Datenaustausch\\Faghih\\InputHPFilter_ert_rtw\\InputHPFilter.c",
	stack: 8,
	stackTotal: 8};
	 this.getMetrics = function(token) { 
		 var data;
		 data = this.metricsArray.var[token];
		 if (!data) {
			 data = this.metricsArray.fcn[token];
			 if (data) data.type = "fcn";
		 } else { 
			 data.type = "var";
		 }
	 return data; }; 
	 this.codeMetricsSummary = '<a href="InputHPFilter_metrics.html">Global Memory: 36(bytes) Maximum Stack: 8(bytes)</a>';
	}
CodeMetrics.instance = new CodeMetrics();
