<%@ Page Title="" Language="C#" MasterPageFile="~/contest2021/Navigation.master" AutoEventWireup="true" CodeBehind="team_2.aspx.cs" Inherits="SmartReading.contest2021.team_2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="childbody" runat="server">
    <div class="order-page join-page">
        <h3 class="text-center my-1 pb-2">協辦單位</h3>
        <a href="https://pansci.asia/" target="_blank" class="logo" title="泛科學">
            <img src="Content/images/team/14.jpg" alt="" style="width: 300px;padding:10px;border:1px solid #ddd;margin:5px;">
        </a>
        <a href="https://student.pansci.asia/#/index" target="_blank" class="logo" title="科學生">
            <img src="Content/images/team/科學生.png" alt="" style="width: 300px;padding:10px;border:1px solid #ddd;margin:5px;">
        </a>
        <a target="_blank" class="logo" title="師子王智慧學習股份有限公司">
            <img src="Content/images/team/15.jpg" alt="" style="width: 300px;padding:10px;border:1px solid #ddd;margin:5px;">
        </a>
        <a href="https://www.hyweb.com.tw/" target="_blank" class="logo" title="凌網科技">
            <img src="Content/images/team/凌網.png" alt="" style="width: 300px;padding:10px;border:1px solid #ddd;margin:5px;">
        </a>
        <a href="https://www.rcpet.edu.tw/" target="_blank" class="logo" title="國立臺灣師範大學-心理與教育測驗研究發展中心">
            <img src="Content/images/team/17.jpg" alt="" style="width: 300px;padding:10px;border:1px solid #ddd;margin:5px;">
        </a>
        <a href="https://www.facebook.com/numeracylab" target="_blank" class="logo" title="數感實驗室">
            <img src="Content/images/team/數感實驗室.png" alt="" style="width: 300px;padding:10px;border:1px solid #ddd;margin:5px;">
        </a>
    </div>
    <div class="row order-body"></div>
    <script>
        update_nav("team_2.aspx", "team");
    </script>
</asp:Content>
