 ?  ?TCSO      qiyi_tips_statistics   conditions	?/<item id="NoticeThisCopyrightWillExpire" level="11" duration="10" type="2">
  <conditions>
    <fields>
      <field name="curADState" operator="eq" value="false"/>
      <field name="curPlayDuration" operator="eq" value="60"/>
      <field name="expiredTimeInterval" operator="lt" value="8"/>
      <field name="c" operator="eq" value="2"/>
    </fields>
    <frequency count="1">
      <restrain name="day"/>
      <restrain name="album"/>
    </frequency>
  </conditions>
  <list>
    <message><![CDATA[
				tipsdata_notice_this_copyright_will_expire
            ]]></message>
  </list>
</item> tipStat
conflict
	list		dateBv?x?5?  