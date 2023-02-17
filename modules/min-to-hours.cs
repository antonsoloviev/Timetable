#region usings
// using Scripting; // using the old scripting before SYMPHOLIGHT v5.0
// using Ecue.Scripting.Compatibility; // using the old scripting before SYMPHOLIGHT v5.0
using Ecue.Contracts;
using Ecue.Contracts.Content;
using Ecue.Contracts.Content.Effects;
using Ecue.Contracts.Devices;
using Ecue.Contracts.Dmx;
using Ecue.Contracts.Exceptions;
using Ecue.Contracts.Logging;
using Ecue.Contracts.Rdm;
using Ecue.Contracts.Scheduler;
using Ecue.Contracts.UserAccess;
using Ecue.Contracts.Workflow;
using Ecue.Sympholight.Scripting.Api;
using System;
#endregion

// This class is public static, so it's methods can be accessed from the workflow designer.

public static class MinToHours
{
    // <summary>
    // Requests the MAC address of the device with the specified IP address.
    // </summary>
	// <param name="ipAddress">The IP address of the controller to get the MAC address from.</param>
    public static string GetMacAddressFromIpAddress(string ipAddress)
    {
		var controllerInfo = ecue.ControllerInfos.GetControllerInfoByIp(ipAddress);
		if (controllerInfo == null)
		{
			return string.Empty;
		}
		
		var macAddress = controllerInfo.MacAddress;
		if (macAddress == null)
		{
			return string.Empty;
		}
		
		ecue.Logging.Info("MAC:" + macAddress, true);
		return macAddress.ToString();
    }
	
	// <summary>
	// Gets information from the controller with the specified IP address.
	// </summary>
	// <param name="ipAddress">The IP address of the controller to get the information from.</param>
	// <param name="macAddress">The MAC address of the controller with the specified IP address.</param>
	// <param name="isOnline">The online status of the controller with the specified IP address.</param>
	// <param name="displayName">The display name of the controller with the specified IP address.</param>
	public static void GetControllerInfoByIpAddress(string ipAddress, out string macAddress, out string isOnline, out string displayName)
    {
		macAddress = "<not found>";
		isOnline = "<not found>";
		displayName = "<not found>";
		
        var controllerInfo = ecue.ControllerInfos.GetControllerInfoByIp(ipAddress);
		if (controllerInfo == null)
		{
			return;
		}

		macAddress = controllerInfo.MacAddress.ToString();
		isOnline = controllerInfo.IsOnline ? "Online" : "Offline";
		displayName = controllerInfo.DisplayName;
    }

	// <summary>
	// Gets a list containing all controllers visualizing display name, IP address and online status.
	// </summary>
	// <param name="firstIpAddress">The IP address of the first controller in the list.</param>
	// <returns>The string representing the list of all controllers.</returns>
	public static string GetControllerList(out string firstIpAddress)
	{
		IControllerInfo[] controllers = ecue.ControllerInfos.GetControllerInfos();
		ecue.Logging.Error(controllers.Length + "");
		string text = string.Empty;
		foreach(var controller in controllers)
		{
			if(controller != null)
			{
				text += controller.DisplayName + " " + (controller.IpAddress == null ? "0.0.0.0" : controller.IpAddress.ToString()) + " " + (controller.IsOnline ? "Online" : "Offline") + "\n";
			}
		}
		
		firstIpAddress = controllers.Length > 0 ? (controllers[0].IpAddress == null ? "0.0.0.0" : controllers[0].IpAddress.ToString()) : "";
		return text;
	}
}
