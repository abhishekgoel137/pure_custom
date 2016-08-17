
  document.getElementById('select_bank').onchange = function(){
      bank_selected(this.options[this.selectedIndex].value);
  };
  document.getElementById('select_state').onchange = function(){
      state_selected(this.options[this.selectedIndex].value);
  };
  document.getElementById('select_district').onchange = function(){
      district_selected(this.options[this.selectedIndex].value);
  };
  document.getElementById('select_branch').onchange = function(){
      branch_selected(this.options[this.selectedIndex].value);
  };
  
  // SET Selected Value in Select Bank option
  function setBankSelect (id, val) {
      document.getElementById(id).value = val;
  }
  var bank = "<?php echo $bank_heading; ?>";
  var selectedBankValue = 'ifsc-code-of-' + (bank.toLowerCase().split(" ").join('-')).trim();
  setBankSelect('select_bank', selectedBankValue);

  // SET Selected Value in Select State option
  function setStateSelect (id, val) {
      document.getElementById(id).value = val;
  }
  var state = "<?php echo $set_state; ?>";
  var selectedStateValue = (state.toLowerCase().split(" ").join('-')).trim();
  setStateSelect('select_state', selectedStateValue);

  // SET Selected Value in Select District option
  function setDistrictSelect (id, val) {
      document.getElementById(id).value = val;
  }
  var District = "<?php echo $set_district; ?>";
  var selectedDistrictValue = (District.toLowerCase().split(" ").join('-')).trim();
  setDistrictSelect('select_district', selectedDistrictValue);

  // SET Selected Value in Select Branch option
  function setBranchSelect (id, val) {
      document.getElementById(id).value = val;
  }
  var branch = "<?php echo $set_branch; ?>";
  var selectedBranchValue = (branch.toLowerCase().split(" ").join('-')).trim();
  setBranchSelect('select_branch', selectedBranchValue);


  function bank_selected( url ){
      var base = "<?php echo $base; ?>";
      top.location.href= base + url;
  }
  function state_selected( url ){
      var base = "<?php echo $base; ?>";
      top.location.href= base + selectedBankValue + '/' + url;
  }
  function district_selected( url ){
      var base = "<?php echo $base; ?>";
      top.location.href= base + selectedBankValue + '/' + selectedStateValue + '/' + url;
  }
  function branch_selected( url ){
      var base = "<?php echo $base; ?>";
      top.location.href= base + selectedBankValue + '/' + selectedStateValue + '/' + selectedDistrictValue + '/' + url;
  }
